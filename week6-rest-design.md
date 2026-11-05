# Lesson 2: RESTful API Design

### 1. getAllStudents
* **Before:** GET /getAllStudents
* **After:** GET /students

### 2. createNewStudent
* **Before:** POST /createNewStudent
* **After:** POST /students

### 3. getStudentById?id=7
* **Before:** GET /getStudentById?id=7
* **After:** GET /students/7

### 4. updateStudentInfo?id=7
* **Before:** PUT /updateStudentInfo?id=7
* **After:** PUT /students/7

### 5. deleteStudentRecord?id=7
* **Before:** DELETE /deleteStudentRecord?id=7
* **After:** DELETE /students/7

### 6. getStudentsByCourse?course=BSCS
* **Before:** GET /getStudentsByCourse?course=BSCS
* **After:** GET /students?course=BSCS