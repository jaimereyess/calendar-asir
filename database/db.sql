CREATE TABLE activities(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    subject ENUM(
        'Administración de sistemas gestores de bases de datos',
        'Administración de sistemas operativos',
        'Implantación de aplicaciones web',
        'Seguridad y alta disponibilidad',
        'Servicios de red e internet',
        'Empresa e iniciativa emprendedora' ) NOT NULL,
    date_limit DATE NOT NULL,
    moodle VARCHAR(255),
    drive VARCHAR(255),
    submitted ENUM('Si', 'No')  DEFAULT 'No'
);
