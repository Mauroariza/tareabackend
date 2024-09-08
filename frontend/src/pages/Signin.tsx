import { useForm, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import instance from '../api/axios';
import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css'; // Asegúrate de tener Tailwind CSS configurado

interface FormData {
  username: string;
  password: string;
}

type FormError = FieldError | Merge<FieldError, FieldErrorsImpl<FormData>>;

const SignInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await instance.post('/auth/login', data);
      localStorage.setItem('token', response.data.token);
      // Redirigir al usuario a la página principal o de administración
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  const getErrorMessage = (error: FormError | undefined): ReactNode => {
    if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
      return error.message;
    }
    return null;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <div className="mb-4">
          <input 
            {...register('username', { required: 'El nombre de usuario es obligatorio' })} 
            placeholder="Nombre de usuario" 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.username && getErrorMessage(errors.username) && <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.username)}</p>}
        </div>
        <div className="mb-4">
          <input 
            {...register('password', { required: 'La contraseña es obligatoria' })} 
            type="password" 
            placeholder="Contraseña" 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.password && getErrorMessage(errors.password) && <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.password)}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default SignInPage;