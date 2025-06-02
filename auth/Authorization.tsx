import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { appConfig } from '../base/utils/config';
import { invokePostService } from '../base/service';
import { dispatchSidebarMenuDetails } from '../store/action/sidebar';
import { dispatchAuthDetails } from '../store/action/auth';
import WHSLoader from '../shared/widgets/loader/spinner';
import { getFormattedPath } from '../base/utils/common';

function Authorization(props: any): any {
    const { authDetails, children } = props;
    const [loading, setLoading] = useState(true);
    const { profile } = authDetails;
    const { pathname } = useLocation();

    useEffect(() => {
        const url = appConfig.auth.uri.getScreensInfo;
        invokePostService(url, { roleId: profile.roles.id, skillId: profile.skills.id,duId:profile.duId,duName:profile.duName }).then(({ screensInfo, menu }: any) => {
            const formattedPath = getFormattedPath(pathname);
            const role = profile.role;
            if (screensInfo[formattedPath] && screensInfo[formattedPath].roles.indexOf(role.id) === -1) {
                role.id = screensInfo[formattedPath].roles[0];
                role.name = profile.roles.name[profile.roles.id.indexOf(role.id)]
            }
            props.dispatchSidebarMenuDetails({ menu });
            props.dispatchAuthDetails({ screensInfo, profile: { ...profile, role } });
            setLoading(false);
        }).catch((error: any) => {
            
        });
    }, []);
    return (loading ? <WHSLoader timeout={Math.pow(100, 2)} /> : <>{children}</>);
}

const mapStateToProps = (state: any) => {
    return {
        authDetails: state.authReducer
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

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);