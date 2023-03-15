import { useNavigate, useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

export const useNavigation = () => {
  const navigate = useNavigate();
  const currentPath = useParams();
  const location = useLocation();

  const navigateTo = (url: string, state?: { [key: string]: any }) =>
    navigate(url, { state });
  const replaceAndNavigateTo = (url: string) =>
    navigate(url, { replace: true });
  const goBack = () => navigate(-1);

  const getState = () => {
    return location.state;
  };

  const getStateParam = (param: string) => {
    if (!!location.state) {
      return !!location.state[param] ? location.state[param] : "";
    }
    return "";
  };

  const getQueryParam = (param: string): string => {
    const parsedParams = queryString.parse(location.search);
    if (parsedParams[param]) {
      return parsedParams[param] as string;
    }
    return "";
  };
  const getCurrentPathName = () => {
    return location.pathname;
  };

  const getHash = () => {
    return location.hash;
  };

  const getPathParam = (param: string) => {
    return currentPath[param];
  };

  return {
    navigateTo,
    replaceAndNavigateTo,
    goBack,
    getState,
    getStateParam,
    getQueryParam,
    getCurrentPathName,
    getHash,
    getPathParam,
  };
};
