import { useEffect } from 'react';
import { connect } from 'react-redux';
import { dispatchAuthDetails } from '../store/action/auth';
import WHSLoader from '../shared/widgets/loader/spinner';
import { appConfig } from '../base/utils/config';
import { invokeGetService } from '../base/service';
import { dispatchSidebarMenuDetails } from '../store/action/sidebar';
import { useHistory } from 'react-router-dom';
function Authentication(props: any) {
    const { authDetails, children } = props;
    const { sidebarDetails: { isExpanded} } = props as any;
    const history = useHistory<any>()
    useEffect(() => {
        checkAuthenticationStatus();
    }, []);

    const checkAuthenticationStatus = () => {
        const url = appConfig.auth.uri.status;
        localStorage.removeItem("profile")

        if(window.localStorage.getItem("wp") && window.localStorage.getItem("wat")){
        invokeGetService(url).then(async (response: any) => {
            if (response.type != 'NewSession') {
                const { isLoggedIn, profile, sessionId } = response;
                const role = profile.defaultRole;
                if (window.localStorage.getItem("IN_Electron_ENV") == "true" && appConfig.clientUtility.mode == "azure") {
                    await props.createRoom(`${appConfig.clientUtility.mode}_${profile.id}`);
                }
                props.dispatchAuthDetails({ isLoggedIn, profile: { ...profile, role }, sessionId });
            }
            const profileValue = JSON.stringify(response.profile)
            
            localStorage.setItem("profile", profileValue)
        }).catch((error: any) => {
            
        });
    }else{
          history.push('/login');
           window.location.reload();  
          }
    };

    return (
        !authDetails.isLoggedIn ? <WHSLoader timeout={Math.pow(100, 2)} /> : <WrapperComponent key={authDetails.profile.role.id} isExpanded={isExpanded} >{children}</WrapperComponent>
    );
}

const mapStateToProps = (state: any) => {
    return {
        authDetails: state.authReducer,
        sidebarDetails: state.sidebarReducer
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatchAuthDetails: (authDetails: any) => {
            dispatchAuthDetails(dispatch, authDetails);
        },
        dispatchSidebarMenuDetails: (menuDetails: any) => {
            dispatchSidebarMenuDetails(dispatch, menuDetails);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

const WrapperComponent = (props: any) => {
    return (<div className={`wms-container ${props.isExpanded ? 'lg' : 'sm'}`}>{props.children}</div>)
}