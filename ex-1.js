function findStudentIndex(students, searchStudent) {
	let left = 0;
	let right = students.length - 1;
	
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (students[mid] === searchStudent) {
			return mid;
		} else if (students[mid] < searchStudent) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}
const students1 = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"];
const searchStudent1 = "John";
console.log(findStudentIndex(students1, searchStudent1));

const students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
const searchStudent2 = "Andrew";
console.log(findStudentIndex(students2, searchStudent2));

// ตอบคำถามตรงนี้จ้า
// Bi search = O(log n) แบ่งการค้นหาเปนสองส่วน คือซ้ายและขวา ฝั่งซ้าย เริ่มจากตำแหน่ง 0ไล่ไปจนถึงตำแหน่ง0-3สุดท้าย ของฝั่งซ้ายที่ถูกแบ่งครึ่ง ฝั่งขวาคือ 4-7ฝั่งขวาให้ค้นหา ย้อนมาเรื่อยๆ คือการค้นหาจากฝั่งซ้ายสุดและขวาสุดค่อยๆบีบลดจำนวนการค้นหาเข้ามาเรื่อยๆ ก็คือ /2 แบ่งของข้อมูลทั้งหมด จนถึงmid
// john อยูตำแหน่งที่7 เมื่อเจอแล้วจึงส่งคำค้นหาออกมา
// andrew ไม่ได้มีข้อมูลอยู่และไม่เข้าเงื่อนไขทุกloop เลยreturn -1 