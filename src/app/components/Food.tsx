"use client";

import React, { useState } from "react";

const Food = () => {
    const [activeButton, setActiveButton] = useState(0);

    const buttons = [
        { id: 0, label: "🍔 Бургеры", bgColor: "#FFAB08" },
        { id: 1, label: "🥗 Закуски", bgColor: "#f1f1f1" },
        { id: 2, label: "🌭 Хот-доги", bgColor: "#f1f1f1" },
        { id: 3, label: "🥙 Комбо", bgColor: "#f1f1f1" },
        { id: 4, label: "🍟 Шаурма", bgColor: "#f1f1f1" },
        { id: 5, label: "🍕 Пицца", bgColor: "#f1f1f1" },
        { id: 6, label: "🥪 Вок", bgColor: "#f1f1f1" },
        { id: 7, label: "🌮 Десерты", bgColor: "#f1f1f1" },
        { id: 8, label: "🌯 Соусы", bgColor: "#f1f1f1" },
    ];

    return (
        <div className="container flex justify-center">
            <div className="flex gap-8">
                {buttons.map((button) => (
                    <button key={button.id} onClick={() => setActiveButton(button.id)} className={`w-[126px] h-[40px] rounded-[50px] text-black text-[16px] ${activeButton === button.id ? "bg-[#FFAB08]" : "bg-[#f1f1f1]"}`} > {button.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Food;
