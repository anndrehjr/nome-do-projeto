import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Moon, Sun } from 'lucide-react';


function ProductsPage({ isDarkMode, toggleDarkMode }) {
  const { collection } = useParams();

  // Simulated products data for each collection
  const productsData = {
    cadernos: [
      { id: 1, name: 'Caderno Espiral', price: 'R$ 19,99', image: '/agendas/1.png?height=400&width=400' },
      { id: 2, name: 'Caderno Capa Dura', price: 'R$ 29,99', image: '/agendas/4.png?height=400&width=400' },
      { id: 3, name: 'Sketchbook', price: 'R$ 39,99', image: '/agendas/3.png?height=400&width=400' },
    ],
    'presente': [
      { id: 1, name: 'Papel Floral', price: 'R$ 5,99', image: '/canecas/1 (1).jpeg?height=400&width=300' },
      { id: 2, name: 'Papel Listrado', price: 'R$ 4,99', image: '/canecas/1 (2).jpeg?height=400&width=300' },
      { id: 3, name: 'Papel Metalizado', price: 'R$ 7,99', image: '/canecas/1 (3).jpeg?height=400&width=300' },
    ],
    canecas: [
      { id: 1, name: 'Cartão de Aniversário', price: 'R$ 8,99', image: '/placeholder.svg?height=400&width=300' },
      { id: 2, name: 'Cartão de Agradecimento', price: 'R$ 6,99', image: '/placeholder.svg?height=400&width=300' },
      { id: 3, name: 'Cartão de Natal', price: 'R$ 9,99', image: '/placeholder.svg?height=400&width=300' },
    ],
    adesivos: [
      { id: 1, name: 'Impressão Fotográfica', price: 'R$ 2,99', image: '/placeholder.svg?height=400&width=300' },
      { id: 2, name: 'Pôster A3', price: 'R$ 15,99', image: '/placeholder.svg?height=400&width=300' },
      { id: 3, name: 'Adesivos Personalizados', price: 'R$ 9,99', image: '/placeholder.svg?height=400&width=300' },
    ],
  };

  const products = productsData[collection] || [];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 transition-colors duration-200 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              <ArrowLeft size={20} className="mr-2" />
              <span>Voltar</span>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="Alternar modo escuro"
            >
              {isDarkMode ? <Sun className="text-yellow-500" size={24} /> : <Moon className="text-gray-600" size={24} />}
            </button>
          </div>
          
          <h1 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white capitalize">
            {collection.replace('-', ' ')}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{product.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{product.price}</p>
                  <button className="mt-4 w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
