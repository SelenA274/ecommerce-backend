import {
  getProfileService,
  updateProfileService,
  addAddressService,
  updateAddressService,
  deleteAddressService,
  getAllUsersService,
  updateUserRoleService,
  deleteUserService
} from "./user.service.js"

export const getProfile = async (req, res) => {
  try {
      const user = await getProfileService({ userId: req.user.id })
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
      const user = await updateProfileService({ userId: req.user.id, data: req.body })
      res.status(200).json({
        status: 200,
        message: "Profile updated successfully",
        data: user,
      })
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Error updating profile",
        data: null,
      })
    }
  }

export const addAddress = async (req, res) => {
  try {
      const addresses = await addAddressService({ userId: req.user.id, address: req.body })
      res.status(200).json({
        status: 200,
        message: "Address added successfully",
        data: addresses,
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
      const addresses = await updateAddressService({ userId: req.user.id, addrId: req.params.addrId, data: req.body })
      res.status(200).json({
        status: 200,
        message: "Address updated successfully",
        data: addresses,
      })
    } catch (error) {
      console.log("Error updating address: ",error)
      res.status(500).json({
        status: 500,
        message: "Error updating address",
        data: null,
      })
    }
}

export const deleteAddress = async (req, res) => {
  try {
      await deleteAddressService({ userId: req.user.id, addrId: req.params.addrId })
      res.status(200).json({
        status: 200,
        message: `User with id: ${req.params.id} deleted successfully`,
        data: null
    })

  } catch (error) {
    // console.log(error)
    res.status(500).json({
        status: 500,
        message: "Failed deleting users Address",
        data: null
    })
  }
}

export const getAllUsers = async (req, res) => {
  try {
      const users = await getAllUsersService()
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

export const updateUserRole = async (req, res) => {
  try {
      await updateUserRoleService({ id: req.params.id, role: req.body.role })
      res.status(200).json({
        status: 200,
        message: `The user with id: ${req.params.id} updated successfuly.`,
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

export const deleteUser = async (req, res) => {
  try {
      await deleteUserService({ id: req.params.id })
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