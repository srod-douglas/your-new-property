import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Address, Category, RealEstate } from '../entities';
import { AppError } from '../errors';
import { tCreateRealEstate } from '../interfaces';
import { returnRealEstateSchema } from '../schemas';

const create = async (dataRealEstate: tCreateRealEstate): Promise<RealEstate> => {

    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const findAddress: Address | null = await addressRepo.findOneBy({
        street: dataRealEstate.address.street,
        city: dataRealEstate.address.city,
        state: dataRealEstate.address.state,
        zipCode: dataRealEstate.address.zipCode
    })
    
    const findCategory: Category | null = await categoryRepo.findOneBy({
        id: +dataRealEstate.categoryId
    })

    if(findAddress){
       throw new AppError('Address already exists',409) 
    }

    if(!findCategory){
        throw new AppError('Category not found', 404)
    }

    const newAddress: Address = addressRepo.create({
        ...dataRealEstate.address
    })

    await addressRepo.save(newAddress)

    const newRealEstate: RealEstate = realEstateRepo.create({
        ...dataRealEstate,
        address: newAddress,
        category: findCategory
    })

    await realEstateRepo.save(newRealEstate)
    returnRealEstateSchema.parse(newRealEstate)
    
    return newRealEstate

} 

const list = async (): Promise<RealEstate[]> => {

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const allRealEstates: RealEstate[] = await realEstateRepo.find({
        relations: {
            address: true
        }
    })

    return allRealEstates

}

export default { create, list }