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

export default { create }