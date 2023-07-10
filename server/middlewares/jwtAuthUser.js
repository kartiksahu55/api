import JWT from "jsonwebtoken";

// *********Middleware function for JWT authentication*********
const jwtAuthToken = (req, res, next) => {
  try {
    const token = req.cookies.token || null;

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized",
      });
    }

    // Verify the token and extract the user payload
    const payload = JWT.verify(token, process.env.SECRET_TOKEN);
    req.userPayload = { id: payload.id, username: payload.username };

    next();
  } catch (error) {
    console.log(error.message);
    next();
  }
};

export default jwtAuthToken;

// This middleware function verifies the presence and validity of a JWT token in the request's cookies.
// If the token is valid, it extracts the user payload and adds it to the request object as req.userPayload.
// If the token is missing or invalid, it sends a 401 Unauthorized response.