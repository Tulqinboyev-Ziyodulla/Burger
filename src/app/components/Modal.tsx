import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  productName: string;
  productPrice: number;
  onAddToCart: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, productName, productPrice, onAddToCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[684px] h-[432px] md:w-[50%] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-black text-xl"
        >
          X
        </button>
        <div className="">
          <h2 className="text-[40px] font-semibold">{productName}</h2>
          <div className='flex gap-8 mt-6'>
            <img src={imageUrl} alt="Product" className="w-[276px] h-[220px] rounded-lg" />
            <p className=' w-[344px]'>Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести. Состав: Пшеничная булочка Котлета из говядины Красный лук Листья салата Соус горчичный 520г, ккал 430</p>
          </div>
          <div className='flex items-center'>
            <button 
              onClick={onAddToCart}
              className="w-[250px] h-[40px] bg-[#FFAB08] text-black rounded-md hover:bg-yellow-400 mt-4" 
            >
              Добавить
            </button>
            <h2 className="font-semibold text-black text-[24px] ml-[350px]">{productPrice}₽</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
