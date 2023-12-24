# Gunakan node versi LTS sebagai dasar
FROM node:18-slim

# Set direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin sisa aplikasi
COPY . .

# Port yang akan digunakan oleh aplikasi Express
EXPOSE 3000

# Perintah untuk menjalankan aplikasi ketika container dimulai
CMD ["npm", "run", "runs"]
