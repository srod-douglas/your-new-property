import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Category } from '../entities'
import { AppError } from '../errors';
import { tReturnCategory, tCreateCategory } from '../interfaces';

const create = async (newCategory: tCreateCategory): Promise<tReturnCategory> => {

    const categoryReceived = newCategory.name

    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory: Category | null = await categoryRepo.findOneBy({
        name: categoryReceived
    })
    
    if(findCategory){
        throw new AppError('Category already exists', 409)
    }

    const category: tReturnCategory = categoryRepo.create(newCategory)
    await categoryRepo.save(category)

    return category

} 

const list = async (): Promise<Category[]> => {

    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)
    const listCategories: Category[] = await categoryRepo.find()

    return listCategories
}

const listRealEstateFromId = async (idCategory: number): Promise<Category | null> => {
    
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory: Category | null = await categoryRepo.findOne({
        relations:{
            realEstate: true
        },
        where:{
            id: idCategory
        }
    })

    return findCategory
}

export default { create, list, listRealEstateFromId }