"use client";

import type { FormHTMLAttributes, ReactNode } from "react";

/**
 * Formulario de Elementor replicado sólo visualmente (por ahora no envía nada).
 *
 * TODO(formulario /padels/): conectar el envío. En WordPress lo procesaba Elementor Pro
 * (campos form_fields[name] y form_fields[email]; ojo: el segundo se muestra como "Teléfono").
 * Opciones: Server Action que mande correo / guarde en una hoja o BD, un servicio de formularios,
 * o redirigir a WhatsApp. Al enviar, el original llevaba a /registro-complete/ (por confirmar).
 */
export default function StaticForm({ children, ...rest }: FormHTMLAttributes<HTMLFormElement> & { children?: ReactNode }) {
  return (
    <form
      {...rest}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {children}
    </form>
  );
}
