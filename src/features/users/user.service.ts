import { User } from "./user.model.js";
import { IAddress } from "../../types/user.types.js";

export const getProfileService = async ({ userId }: { userId: string }) => {
    const user = await User.findById(userId).select("-password")
    if (!user) throw { 
      status: 404, 
      message: "User not found" 

    }
    return user
}


export const updateProfileService = async ({ userId, data }: {userId: string; data: Record<string, unknown>;}) => {
    const user = await User.findByIdAndUpdate(userId, data, { new: true }).select("-password")
    if (!user) throw { 
      status: 404, 
      message: "User not found" 

    }
    return user
}

export const addAddressService = async ({ userId, address }: {userId: string; address: IAddress;}) => {
    const user = await User.findById(userId);
    if (!user) 
      throw { 
    status: 404, 
    message: "User not found" 
  };
    user.addresses.push(address);
    await user.save();
    return user.addresses;
}

export const updateAddressService = async ({ userId, addrId, data }: {userId: string; addrId: string; data:Partial<IAddress>;}) => {
    const user = await User.findById(userId)
    if (!user) 
      throw { 
    status: 404, 
    message: "User not found" 
  };
    const address = user.addresses.id(addrId)
    if (!address) throw { 
      status: 404, 
      message: "Address not found" 
    }
    Object.assign(address, data)
    await user.save()
    return user.addresses
}

export const deleteAddressService = async ({ userId, addrId }: {userId: string; addrId: string;}) => {
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

export const updateUserRoleService = async ({ id, role }: {id: string; role: string;}) => {
    const user = await User.findByIdAndUpdate(id, 
      { role }, 
      { new: true })
    if (!user) throw { 
      status: 404, 
      message: "User not found" 
    }
    return user
}

export const deleteUserService = async ({ id }:{id: string;}) => {
    await User.findByIdAndDelete(id)
    return true
}

