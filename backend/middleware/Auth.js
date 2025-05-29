import jwt from "jsonwebtoken";

// admin authentication middleware
const authAdnin = async (req, res, next) => {
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

export default authAdnin;
