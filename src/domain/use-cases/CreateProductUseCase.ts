import {Product} from "../entities/Product";

interface CreateProductUseCaseRequest {
    userId: string
    title: string
    price: number
    initialAmount: number
    description: string
}

export class CreateProductUseCase {
    execute({
        userId,
        title,
        price,
        initialAmount,
        description,
    }: CreateProductUseCaseRequest) {
        const product = new Product(
            title,
            price,
            description,
            initialAmount,
        );

        return { product }

    }
}