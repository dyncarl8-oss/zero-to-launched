export function getWhopHeaders(): HeadersInit {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const userToken = getCookie("whop_user_token") || getHeaderFromParent("x-whop-user-token");
  
  if (userToken) {
    headers["x-whop-user-token"] = userToken;
  }

  return headers;
}

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
}

function getHeaderFromParent(headerName: string): string | null {
  try {
    if (window.parent && window.parent !== window) {
      return null;
    }
  } catch (e) {
    return null;
  }
  return null;
}
