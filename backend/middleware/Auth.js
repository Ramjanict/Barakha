import jwt from "jsonwebtoken";

// admin authentication middleware
const auth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    //if admin token not available
    if (!token) {
      return res.json(
        res.json({
          success: false,
          message: "Not Authorized login and no token",
        })
      );
    }
    // decode token
    const decode_token = jwt.verify(token, process.env.JWT_SECRET);

    console.log("decode_token", decode_token);
    if (decode_token !== process.env.ADMIN_EMAIL) {
      return res.json(
        res.json({
          success: false,
          message: "Not Authorized Login again",
        })
      );
    }
    next();
  } catch (error) {
    console.log("error", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default auth;
