"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal"; 
import Cart from "./Cart";

const ProductCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage] = useState<string>("/images/burger-img.png");
  const [productName] = useState<string>("Мясная бомба");
  const [productPrice] = useState<number>(689);
  const [cart, setCart] = useState<Array<any>>([]);

  const handleAddToCart = () => {
    const newId = cart.length > 0 ? cart[cart.length - 1].id + 1 : 1;
    setCart([...cart, { id: newId, name: productName, price: productPrice, imageUrl: "/images/burger-img.png" }]);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id); 
    setCart(updatedCart); 
  };

  return (
    <>
      <h2 className="mt-[50px] flex justify-center text-black font-semibold text-[40px]">Бургеры</h2>
      <div className="Card flex flex-wrap gap-20 justify-center">
        <div className="bg-[#f1f1f1] mt-10 w-[300px] h-[411px] p-[14px] rounded-lg">
          <Image src="/images/burger-img.png" alt="Burger" width={276} height={220} />
          <div className="p-4">
            <h2 className="font-semibold text-black text-[24px]">{productPrice}₽</h2>
            <p className="text-[16px] font-normal">{productName}</p>
            <p className="text-[#B1B1B1] font-semibold text-[16px] mt-3">520г</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-[250px] h-[40px] bg-[#ddd] text-black rounded-md hover:bg-[#ccc] mt-4"
            >
              Добавить
            </button>
          </div>
        </div>
        <div className="bg-[#f1f1f1] mt-10 w-[300px] h-[411px] p-[14px] rounded-lg">
          <Image src="/images/burger-img.png" alt="Burger" width={276} height={220} />
          <div className="p-4">
            <h2 className="font-semibold text-black text-[24px]">{productPrice}₽</h2>
            <p className="text-[16px] font-normal">{productName}</p>
            <p className="text-[#B1B1B1] font-semibold text-[16px] mt-3">520г</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-[250px] h-[40px] bg-[#ddd] text-black rounded-md hover:bg-[#ccc] mt-4"
            >
              Добавить
            </button>
          </div>
        </div>
        <div className="bg-[#f1f1f1] mt-10 w-[300px] h-[411px] p-[14px] rounded-lg">
          <Image src="/images/burger-img.png" alt="Burger" width={276} height={220} />
          <div className="p-4">
            <h2 className="font-semibold text-black text-[24px]">{productPrice}₽</h2>
            <p className="text-[16px] font-normal">{productName}</p>
            <p className="text-[#B1B1B1] font-semibold text-[16px] mt-3">520г</p>
            <button
              onClick={() => setIsModalOpen(true)} 
              className="w-[250px] h-[40px] bg-[#ddd] text-black rounded-md hover:bg-[#ccc] mt-4"
            >
              Добавить
            </button>
          </div>
        </div>
        <div className="bg-[#f1f1f1] mt-10 w-[300px] h-[411px] p-[14px] rounded-lg">
          <Image src="/images/burger-img.png" alt="Burger" width={276} height={220} />
          <div className="p-4">
            <h2 className="font-semibold text-black text-[24px]">{productPrice}₽</h2>
            <p className="text-[16px] font-normal">{productName}</p>
            <p className="text-[#B1B1B1] font-semibold text-[16px] mt-3">520г</p>
            <button
              onClick={() => setIsModalOpen(true)} 
              className="w-[250px] h-[40px] bg-[#ddd] text-black rounded-md hover:bg-[#ccc] mt-4"
            >
              Добавить
            </button>
          </div>
        </div>
        <div className="bg-[#f1f1f1] mt-10 w-[300px] h-[411px] p-[14px] rounded-lg">
          <Image src="/images/burger-img.png" alt="Burger" width={276} height={220} />
          <div className="p-4">
            <h2 className="font-semibold text-black text-[24px]">{productPrice}₽</h2>
            <p className="text-[16px] font-normal">{productName}</p>
            <p className="text-[#B1B1B1] font-semibold text-[16px] mt-3">520г</p>
            <button
              onClick={() => setIsModalOpen(true)} 
              className="w-[250px] h-[40px] bg-[#ddd] text-black rounded-md hover:bg-[#ccc] mt-4"
            >
              Добавить
            </button>
          </div>
        </div>
        <div className="bg-[#f1f1f1] mt-10 w-[300px] h-[411px] p-[14px] rounded-lg">
          <Image src="/images/burger-img.png" alt="Burger" width={276} height={220} />
          <div className="p-4">
            <h2 className="font-semibold text-black text-[24px]">{productPrice}₽</h2>
            <p className="text-[16px] font-normal">{productName}</p>
            <p className="text-[#B1B1B1] font-semibold text-[16px] mt-3">520г</p>
            <button
              onClick={() => setIsModalOpen(true)} 
              className="w-[250px] h-[40px] bg-[#ddd] text-black rounded-md hover:bg-[#ccc] mt-4"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl={modalImage}
        productName={productName}
        productPrice={productPrice}
        onAddToCart={handleAddToCart} 
      />

      <Cart cart={cart} onDeleteItem={handleDeleteItem} />
    </>
  );
};

export default ProductCard;
