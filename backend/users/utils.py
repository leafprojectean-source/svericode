from rest_framework_simplejwt.tokens import RefreshToken

def set_jwt_cookie(response, user):
    refresh = RefreshToken.for_user(user)
    access_token = str(refresh.access_token)

    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        secure=True,   # use HTTPS in production
        samesite="Lax"
    )
    return response
