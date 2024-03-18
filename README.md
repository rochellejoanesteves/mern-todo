Instructions on how to run the solution:
**BACKEND**
1. Clone the repository: https://github.com/rochellejoanesteves/mern-todo.git
2. Install the backend dependencies:
     - cd api
     - npm install
3. Create .env file in the api directory. Replace the your_mongodb_connection with your MongoDB connection URI
     - MONGO=your_mongodb_connection
4. Start the backend server
    - npm run start
  
**FRONTEND**
1. Install the frontend dependencies:
     - cd ../client
     - npm install
2. Start the React Development Server
    - npm run dev
3. Access the Todo App
    - Open the browser and visit http://localhost:5173/ 


API Endpoints:
- Get all todos: **GET** http://localhost:3000/api/todo/getTodos
- Create new todo: **POST** http://localhost:3000/api/todo/create
- Update a todo with the given ID: **POST** http://localhost:3000/api/todo/updateTodo/:id
- Delete a todo with the given ID: **DELETE** http://localhost:3000/api/todo/deleteTodo/:id


Output:
<img width="1466" alt="image" src="https://github.com/rochellejoanesteves/mern-todo/assets/128266520/2062e71f-8aa1-4aa0-8ec2-d4b146fd2cb4">
