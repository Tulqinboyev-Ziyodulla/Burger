import React from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface CartProps {
    cart: CartItem[];
    onDeleteItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onDeleteItem }) => {
    if (cart.length === 0) {
        return <div className="bg-[#f1f1f1] flex justify-center items-center h-[50px] text-center text-[20px] font-semibold mt-10">Корзина 🫗</div>;
    }

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="p-6 bg-[#f1f1f1] w-full h-[250px] mt-10">
            <h2 className="text-2xl font-semibold">Корзина</h2>
            <div className="mt-6">
                {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b py-4">
                        <img src={item.imageUrl} alt={item.name} className="w-[50px] h-[50px] rounded-lg" />
                        <div className="flex flex-col">
                            <p className="font-semibold">{item.name}</p>
                            <p>{item.price}₽</p>
                        </div>
                        <button
                            onClick={() => onDeleteItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Удалить
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
                <p className="font-semibold text-xl">общий: {totalPrice}₽</p>
                <button className="bg-yellow-500 text-black rounded-md px-6 py-2 hover:bg-yellow-400">
                Заказ
                </button>
            </div>
        </div>
    );
};

export default Cart;
