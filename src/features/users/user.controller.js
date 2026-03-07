import { User } from "../users/user.model.js"
import bcrypt from "bcryptjs"

export const getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password")
//select("-password") מוציא את שדה הסיסמה מהתגובה מטעמי אבטחה
      res.status(200).json({
        status: 200,
        message: "Profile fetched successfully",
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Error fetching profile",
        data: null,
      })
    }
  }

  export const updateProfile = async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        req.body,
        { new: true }
      ).select("-password");
  
      res.status(200).json({
        status: 200,
        message: "Profile updated successfully",
        data: updatedUser,
      })
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Error updating profile",
        data: null,
      })
    }
  }

  
  export const changePassword = async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body
      const user = await User.findById(req.user.id).select("+password")
      const isMatch = await bcrypt.compare(currentPassword, user.password)
      // console.log("currentPassword: ",currentPassword)
      // console.log("newPassword: ",newPassword)
      // console.log("user.password: ",user.password)
      if (!isMatch) {
        return res.status(400).json({
          status: 400,
          message: "Current password is incorrect",
          data: null,
        })
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10)
      user.password = hashedPassword;
      await user.save()

      res.status(200).json({
        status: 200,
        message: "Password changed successfully",
        data: null,
      });
    } catch (error) {
      // console.log("the error issss : ",error)
      res.status(500).json({
        status: 500,
        message: "Error changing password",
        data: null,
      })
    }
  }
  

  export const addAddress = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("+password")
  
      user.addresses.push(req.body)
      await user.save()
  
      res.status(200).json({
        status: 200,
        message: "Address added successfully",
        data: user.addresses,
      })
    } catch (error) {
      // console.log("theee errorr issss : ",error)
      res.status(500).json({
        status: 500,
        message: "Error adding address",
        data: null,
      })
    }
  }
  

  export const updateAddress = async (req, res) => {
    try {
      const { addrId } = req.params
      const user = await User.findById(req.user.id).select("+password")
      const address = user.addresses.id(addrId)
      Object.assign(address, req.body)
      await user.save()
  
      res.status(200).json({
        status: 200,
        message: "Address updated successfully",
        data: user.addresses,
      })
    } catch (error) {
      // console.log("Error updating address: ",error)
      res.status(500).json({
        status: 500,
        message: "Error updating address",
        data: null,
      })
    }
  }
  

  export const deleteAddress = async (req, res) => {
    try {
        const userId = req.user.id;
        const { addrId } = req.params;           
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $pull: { addresses: { _id: addrId } } },
            { new: true }
          )
          if (!updatedUser) {
            return res.status(404).json({
              status: 404,
              message: "User not found",
              data: null,
            })
          }
            res.status(200).json({
            status: 200,
            message: `User with id: ${req.params.id} deleted successfully`,
            data: null
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "Failed deleting users Address",
            data: null
        })
    }
}

export const updateUserRole = async (req, res) => {
    try {
        const { id } = req.params
        const { role } = req.body

        const updatedUser = await User.findByIdAndUpdate(id,
      { role },
      { new: true }
       )

       if (!updatedUser) {
        return res.status(404).json({
          status: 404,
          message: "User not found",
          data: null,
        });
      }
        res.status(200).json({
            status: 200,
            message: `The user with id: ${id} updated successfuly.`,
            data: null
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Error updating user",
            data: null
        })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            status: 200,
            message: "Users fetched successfully",
            data: users
        })
    } catch (error) { 
        res.status(500).json({
            status: 500,
            message: error.message || error,
            data: null
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 200,
            message: `User with id: ${req.params.id} deleted successfully`,
            data: null
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "Failed deleting user",
            data: null
        })
    }
}
