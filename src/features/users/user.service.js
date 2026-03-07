import { User } from "./user.model.js"
import bcrypt from "bcryptjs"

export const getProfileService = async ({ userId }) => {
    const user = await User.findById(userId).select("-password")
    if (!user) throw { 
      status: 404, 
      message: "User not found" 

    }
    return user
}


export const updateProfileService = async ({ userId, data }) => {
    const user = await User.findByIdAndUpdate(userId, data, { new: true }).select("-password")
    if (!user) throw { 
      status: 404, 
      message: "User not found" 

    }
    return user
}

export const addAddressService = async ({ userId, address }) => {
    const user = await User.findById(userId)
    user.addresses.push(address)
    await user.save()
    return user.addresses
}

export const updateAddressService = async ({ userId, addrId, data }) => {
    const user = await User.findById(userId)
    const address = user.addresses.id(addrId)
    if (!address) throw { 
      status: 404, 
      message: "Address not found" 


    }
    Object.assign(address, data)
    await user.save()
    return user.addresses
}

export const deleteAddressService = async ({ userId, addrId }) => {
    const user = await User.findByIdAndUpdate(
        userId,
        { $pull: { addresses: { _id: addrId } } },
        { new: true }

    )
    if (!user) throw { 
      status: 404, 
      message: "User not found" 

    }
    return true
}

export const getAllUsersService = async () => {
    return await User.find()
}

export const updateUserRoleService = async ({ id, role }) => {
    const user = await User.findByIdAndUpdate(id, 
      { role }, 
      { new: true })
    if (!user) throw { 
      status: 404, 
      message: "User not found" 
    }
    return user
}

export const deleteUserService = async ({ id }) => {
    await User.findByIdAndDelete(id)
    return true
}

