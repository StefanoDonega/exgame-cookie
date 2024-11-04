export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;

  /**
   * Email utilizzata per l'autenticazione
   */
  email:string;
  created_at: string;
  updated_at:string;

  /**
   * può assumere i valori:
   * - admin
   * - student
   * - teacher
   */
  role: Role;
  courses?: string[];
  image?: string;

  /**
   * rappresenta i corsi assegnati ad un docente. Questa proprietà non è valorizzata per i "role: teacher"
   */
  subject?:string[];

  /**
   * rappresenta le classi assegnate ad un teacher. Vcd alorizzata solo per i "role: teacher"
   */
  classes?: string[];

  /**
   * sono le classi a cui uno studente appartiene. è valorizzato solo per i "role: student"
   */
  student_classe?: string;
};


export type Role = "admin" | "teacher" | "student";