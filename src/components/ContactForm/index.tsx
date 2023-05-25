import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ContactFormData } from "@/interfaces/formData.interface";
import { sendContactForm } from "@/lib/api";

const ContactForm = ({ handleFormChange }: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialValues = {
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("El nombre es requerido"),
    lastname: Yup.string().required("El apellido es requerido"),
    company: Yup.string().required("El nombre de la empresa es requerido"),
    email: Yup.string()
      .email("Ingrese un correo válido")
      .required("El correo es requerido"),
    message: Yup.string().required("El mensaje es requerido"),
  });

  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);
    await sendContactForm(values);
    handleFormChange()
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form action="#" method="POST" className="lg:flex-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Nombre
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="firstname"
                id="firstname"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="firstname"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Apellido
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="lastname"
                id="lastname"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Correo
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Empresa
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="company"
                id="company"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="company"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Mensaje
            </label>
            <div className="mt-2.5">
              <Field
                as="textarea"
                id="message"
                name="message"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
        <div className="mt-10">
        <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isSubmitting ? "Enviando..." : "Contactanos"}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
