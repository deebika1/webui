import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import { appConfig } from '../base/utils/config';
import { invokePostService } from '../base/service';
import Forbidden from '../shared/common/forbidden/forbidden';
import WHSLoader from '../shared/widgets/loader/spinner';
import { getFormattedPath } from '../base/utils/common';

interface AuthorizationProps {
    path: string;
    exact?: boolean;
    component?: React.ComponentType<any> | null
}

function AuthorizedRoute({ path, component: Component, exact = false, ...props }: AuthorizationProps): any {
    const { authDetails: { profile, screensInfo }, location } = props as any;
    const [permissions, setPermissionsInfo] = useState({});
    const [isForbidden, setIsForbidden] = useState(false);
    const history = useHistory();
    const formattedPath = getFormattedPath(path);

    useEffect(() => {
        let unsubscribe = false;
        setIsForbidden(false);
        if (isAuthorizedScreen()) {
            const url = appConfig.auth.uri.getScreenInfo;
            invokePostService(url, { roleId: profile.role.id, skillId: profile.skills.id, screenId: screensInfo[formattedPath].id }).then((entityInfo: any) => {
                if (!unsubscribe) setPermissionsInfo(entityInfo);
            }).catch((error: any) => {
                
            });
        } else {
            if (!unsubscribe) setIsForbidden(true);
        }
        return () => {
            unsubscribe = true;
        };
    }, [location]);

    const isAuthorizedScreen = () => {
        return screensInfo[formattedPath] && screensInfo[formattedPath].roles.indexOf(profile.role.id) !== -1
    }

    return (isAuthorizedScreen() ? (<Route exact path={path} >
        {Component && <Component profile={{ id: profile.id, duId: profile.duId, duName: profile.duName, skills: profile.skills, role: profile.role }} screenId={screensInfo[formattedPath].id} history={history} location={location} permissions={permissions} />}
    </Route>) : (isForbidden ? <Forbidden /> : <WHSLoader timeout={Math.pow(100, 3)} />));
}

const mapStateToProps = (state: any) => {
    return {
        authDetails: state.authReducer
    }
}

export default connect(mapStateToProps, null)(AuthorizedRoute);