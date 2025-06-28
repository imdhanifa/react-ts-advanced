const mockProducts = [
  {
    id: "1",
    name: "Iphone",
    quantity: 100,
    price: 27000000,
  },
  {
    id: "2",
    name: "Samsung",
    quantity: 28,
    price: 22000000,
  },
  {
    id: "3",
    name: "Nokia",
    quantity: 10,
    price: 15000000,
  },
  {
    id: "4",
    name: "Sony",
    quantity: 44,
    price: 25000000,
  },
];

export const getProductListApi = (): Promise<ResGetProductApi> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          products: mockProducts,
        },
        message: "Get product successfully",
      });
    }, 100);
  });

export const getProductItemApi = (id: string): Promise<ResGetProductItemApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find((product: any) => product.id === id);
      if (product) {
        resolve({
          data: {
            product,
          },
          message: "Get product successfully",
        });
      } else {
        reject(new Error("No products found"));
      }
    }, 100);
  });

export const createProductApi = (
  newProduct: any
): Promise<{ message: string }> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const id = (
        Math.max(...mockProducts.map((p) => +p.id), 0) + 1
      ).toString();
      mockProducts.push({ ...newProduct, id });
      resolve({ message: "Product created successfully" });
    }, 100);
  });

export const updateProductApi = (
  updatedProduct: any
): Promise<{ message: string }> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockProducts.findIndex((p) => p.id === updatedProduct.id);
      if (index > -1) {
        mockProducts[index] = { ...mockProducts[index], ...updatedProduct };
        resolve({ message: "Product updated successfully" });
      } else {
        reject(new Error("Product not found"));
      }
    }, 100);
  });

export const deleteProductApi = (id: string): Promise<{ message: string }> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockProducts.findIndex((p) => p.id === id);
      if (index > -1) {
        mockProducts.splice(index, 1);
        resolve({ message: "Product deleted successfully" });
      } else {
        reject(new Error("Product not found"));
      }
    }, 100);
  });
