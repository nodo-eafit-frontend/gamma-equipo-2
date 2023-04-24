import React from "react";
import "../../styles/components/paginaDonaciones1/_button.scss";
import Link from "next/link";

export const ButtonSiguiente = () => {
  return (
    <Link href="/donar2" className="buttonSiguiente">
      Siguiente
    </Link>
  );
};
