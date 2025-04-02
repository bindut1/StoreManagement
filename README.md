# Product Management System

This is a Node.js-based product management system designed for managing products, categories, accounts, roles, and permissions. It includes both client and admin interfaces with role-based access control.

## Features

### Admin Panel
- Manage products, categories, accounts, and roles.
- Role-based permissions for viewing, creating, editing, and deleting.
- Dashboard with statistics.
- General settings for the website.

### Client Interface
- Product listing and search.
- User registration, login, and profile management.
- Shopping cart and checkout functionality.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Templating Engine**: Pug
- **Styling**: CSS, Bootstrap
- **File Upload**: Multer, Cloudinary
- **Authentication**: Cookie-based with role-based access control
- **Other Libraries**: Moment.js, Mongoose, TinyMCE

## Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary account for image uploads
- `.env` file with the following variables:
  ```
  CLOUD_NAME=<your-cloudinary-cloud-name>
  CLOUD_KEY=<your-cloudinary-api-key>
  CLOUD_SECRET=<your-cloudinary-api-secret>
  PORT=<your-server-port>
  ```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bindut1/Product-Management.git
   cd product-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the `.env` file with the required environment variables.

4. Start the MongoDB server.

5. Run the application:
   ```bash
   npm start
   ```

6. Access the application:
   - Admin Panel: `http://localhost:<PORT>/admin`
   - Client Interface: `http://localhost:<PORT>/`

## Project Structure

```
product-management/
├── controllers/       # Application logic for routes
├── models/            # Mongoose schemas and models
├── routes/            # Route definitions
├── views/             # Pug templates for rendering UI
├── public/            # Static assets (CSS, JS, images)
├── middlewares/       # Custom middleware functions
├── helpers/           # Utility functions
├── config/            # Configuration files
├── .env               # Environment variables
├── Dockerfile         # Docker configuration
├── package.json       # Project metadata and dependencies
```

## Key Endpoints

### Admin
- `/admin/products`: Manage products.
- `/admin/products-category`: Manage product categories.
- `/admin/accounts`: Manage user accounts.
- `/admin/roles`: Manage roles and permissions.
- `/admin/settings/general`: General settings.

### Client
- `/`: Home page.
- `/products`: Product listing.
- `/user/register`: User registration.
- `/user/login`: User login.
- `/cart`: Shopping cart.

## Development

### Vercel
The project includes a `vercel.json` file for deployment on Vercel.

## License
This project is licensed under the MIT License.

## Acknowledgments
- [Cloudinary](https://cloudinary.com/) for image hosting.
- [TinyMCE](https://www.tiny.cloud/) for rich text editing.
