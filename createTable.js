const guestList = [
  ['Aamir Turk','9. France'],
  ['Abbas Akhtar','25. India'],
  ['Abeer Syeda','10. Ireland'],
  ['Abyan Chaudhri','25. India'],
  ['Adeeb Ali','24. Egypt'],
  ['Aeraj Ahmed','9. France'],
  ['Aftab Ansari','22. Mexico'],
  ['Ahzam Ali','15. Italy'],
  ['Aisha Bashir','12. Turkey'],
  ['Aisha Mohamed','24. Egypt'],
  ['Akhtar Chaudhri','17. Hungary'],
  ['Akmal Zeb','4. Jamaica'],
  ['Alex Peterson','23. Bangladesh'],
  ['Ali Ahsan','2. Canada'],
  ['Ali Asghar Hasnain','3. Pakistan'],
  ['Ali Islam','1. United States'],
  ['Ali Khan','24. Egypt'],
  ['Ali Naqvi','22. Mexico'],
  ['Ali Sajjad','7. United Kingdom'],
  ['Ali Turk','10. Ireland'],
  ['Alia Hasan','3. Pakistan'],
  ['Alishba Kazmi','29. South Korea'],
  ['Almas Wasim','14. Morocco'],
  ['Amaan Chaudhri','25. India'],
  ['Amina Fayyaz','30. Australia'],
  ['Aneela Shafqat','13. Palestine'],
  ['Anwer Hussain','21. Russia'],
  ['Aon Hasnain','20. Qatar'],
  ['Arif Abbas','2. Canada'],
  ['Arif Altaf','17. Hungary'],
  ['Arif Quraishi','18. Netherlands'],
  ['Arshia Hasnain','22. Mexico'],
  ['Asad Hasnain','20. Qatar'],
  ['Asad Irfanullah','16. Greece'],
  ['Ashaz Chaudhri','25. India'],
  ['Asher Chaudhry','30. Australia'],
  ['Asher Shaikh','17. Hungary'],
  ['Asif Rahman','16. Greece'],
  ['Asim Fayyaz','30. Australia'],
  ['Asim Khan','17. Hungary'],
  ['Asim Qadri','18. Netherlands'],
  ['Ather Khawaja','9. France'],
  ['Atif Khan','23. Bangladesh'],
  ['Atif Waseem Khan','28. Japan'],
  ['Aun Hussain','20. Qatar'],
  ['Aunty Sajjad','7. United Kingdom'],
  ['Ayesha Islam','1. United States'],
  ['Ayesha Mitha','29. South Korea'],
  ['Azhar Chughtai','17. Hungary'],
  ['Aziz Akhtar','17. Hungary'],
  ['Baasit Mahmood','19. Somalia'],
  ['Batool Husnain','4. Jamaica'],
  ['Bilal Murad','16. Greece'],
  ['Bilal Syed','15. Italy'],
  ['Brittany Becker','24. Egypt'],
  ['Bushra Dar','12. Turkey'],
  ['Connie Ghanchi','21. Russia'],
  ['Coord Taylor Oakes','31. Ethiopia'],
  ["Coord Taylor's assistant 1",'31. Ethiopia'],
  ["Coord Taylor's assistant 2",'31. Ethiopia'],
  ['Danish Mahmood','19. Somalia'],
  ['Eamaan Turk','27. China'],
  ['Ebrahim Ghanchi','21. Russia'],
  ['Eiman Asraf','28. Japan'],
  ['Emaad','19. Somalia'],
  ['Erum Khan','5. Brazil'],
  ['Esa Islam','1. United States'],
  ['Faiz Khan','21. Russia'],
  ['Faizoon Jabir','10. Ireland'],
  ['Farah Salahuddin','22. Mexico'],
  ['Farha Ikramuddin','13. Palestine'],
  ['Farha Khan','12. Turkey'],
  ['Farheen Abbas','2. Canada'],
  ['Farheen Shah','4. Jamaica'],
  ['Farheen Turk','5. Brazil'],
  ['Farida Kathawalla','13. Palestine'],
  ['Farooqua Jafri','11. Poland'],
  ['Fatima Shah','29. South Korea'],
  ['Fauzia Chaudhry','10. Ireland'],
  ['Fauzia Siddiqui','21. Russia'],
  ['Feroz Iqbal','17. Hungary'],
  ['Firdous Fatima','27. China'],
  ['Fizza Shah','27. China'],
  ['Frank Haney','24. Egypt'],
  ['Ghazala Jafri','2. Canada'],
  ['Ghazala Kaiser','14. Morocco'],
  ['GM Qureshi','16. Greece'],
  ['Goshi Fatima','27. China'],
  ['Hamna Akmal','4. Jamaica'],
  ['Hana Ikramuddin','23. Bangladesh'],
  ['Harris','19. Somalia'],
  ['Haseeb Malik','30. Australia'],
  ['Hassan Abbas','19. Somalia'],
  ['Hassan Haider','23. Bangladesh'],
  ['Hassan Husnain','4. Jamaica'],
  ['Heena Jaffri','6. Wales'],
  ['Hiba Ansari','29. South Korea'],
  ['Hina Islam','1. United States'],
  ['Hina Javed','14. Morocco'],
  ['Hinnah Abid','23. Bangladesh'],
  ['Huda Naveed','5. Brazil'],
  ['Humera Akmal','4. Jamaica'],
  ['Humza Chaudhry','10. Ireland'],
  ['Humza Islam','1. United States'],
  ['Hunzala Zafar','15. Italy'],
  ['Huq','19. Somalia'],
  ['Husayn Abbas','31. Ethiopia'],
  ['Hussain Raza','8. Spain'],
  ['Ibrahim Abbas','2. Canada'],
  ['Ihsaan Motala','19. Somalia'],
  ['Iman Jafri','29. South Korea'],
  ['Imran Moleazay','28. Japan'],
  ['Irfan Altafullah','18. Netherlands'],
  ['Irshad Jafri','16. Greece'],
  ['Izza Abid','13. Palestine'],
  ['Jabeen Hasnain','3. Pakistan'],
  ['Jafar Hasnain','22. Mexico'],
  ['Jalpa Mathur','26. Singapore'],
  ['Jamal Syed','15. Italy'],
  ['Jamila Momin','12. Turkey'],
  ['Javed Ghauri','14. Morocco'],
  ['Javed Ghauri','15. Italy'],
  ['Jess Malik','30. Australia'],
  ['Junaid Ikramuddin','20. Qatar'],
  ['Kaazim Abbas','6. Wales'],
  ['Kabir Merchant','2. Canada'],
  ['Kaiser','15. Italy'],
  ['Kaiser Syed','14. Morocco'],
  ['Kamran Raza','4. Jamaica'],
  ['Khurshid Siddiqui','21. Russia'],
  ['Khwaja Abbas','3. Pakistan'],
  ['Kim Hussain','21. Russia'],
  ['Kyle D','1. United States'],
  ['Lena Abbas','8. Spain'],
  ['Maheen Quraishi','23. Bangladesh'],
  ['Mahvish Khan','24. Egypt'],
  ['Makiya Chughtai','11. Poland'],
  ['Maliha Abbas','2. Canada'],
  ['Mariam Zaidi','8. Spain'],
  ['Maryam Khan','10. Ireland'],
  ['Maryam Khan','14. Morocco'],
  ['Mayme','31. Ethiopia'],
  ['Meekal Toor','6. Wales'],
  ['Meesha Awan','28. Japan'],
  ['Mehboob Ahmad','3. Pakistan'],
  ['Meryum Syeda','27. China'],
  ['Michaela Minarik','24. Egypt'],
  ['Misba Rehman','9. France'],
  ['Moeen Masood','7. United Kingdom'],
  ['Mohammad Usman Aijaz','28. Japan'],
  ['Mohammed Ali','19. Somalia'],
  ['Mohammed Khan','30. Australia'],
  ['Mohsin Shah','9. France'],
  ['Moiz Akhtar','17. Hungary'],
  ['Moiz Hasan','3. Pakistan'],
  ['Mona Ali','14. Morocco'],
  ['Moosa Zubairi','30. Australia'],
  ['MoosaKhan','19. Somalia'],
  ['Munawwar Sajjad','18. Netherlands'],
  ['Munir Abid','18. Netherlands'],
  ['Muntarin Ahmed','27. China'],
  ['Mussarat Najam','21. Russia'],
  ['Myra Chaudhry','27. China'],
  ['Nadeem Chaudhry','10. Ireland'],
  ['Nadeem Iqbal','18. Netherlands'],
  ['Nadia Akhtar','23. Bangladesh'],
  ['Nadim Zoberi','18. Netherlands'],
  ['Nafees Kazmi','5. Brazil'],
  ['Naghma Quraishi','12. Turkey'],
  ['Naheed Murad','11. Poland'],
  ['Najam Saeed','21. Russia'],
  ['Nausheen Reshi','22. Mexico'],
  ['Naveed Malik','9. France'],
  ['Niaz Mahmood','9. France'],
  ['Nida Haidar','20. Qatar'],
  ['Nitin Mathur','26. Singapore'],
  ['Noorfatima Mahmood','28. Japan'],
  ['Noreen Irfanuallh','11. Poland'],
  ['Nunu Harris','5. Brazil'],
  ['Omar Islam','1. United States'],
  ['Ooshna Akmal','4. Jamaica'],
  ['Pavan Allalaghatta','26. Singapore'],
  ['Photographer Rachel Elle','31. Ethiopia'],
  ['Pooja Goswami','26. Singapore'],
  ['Qasim Hasnain','8. Spain'],
  ['Rabia Yousaf','28. Japan'],
  ['Rafay Syed','15. Italy'],
  ['Ramis Khan','25. India'],
  ['Rayyaan Chaudhri','25. India'],
  ['Raza Abbas','31. Ethiopia'],
  ['Raza Hasan','3. Pakistan'],
  ['Raza Tajamal','18. Netherlands'],
  ['Razia Akhtar','13. Palestine'],
  ['Robby Chughtai','20. Qatar'],
  ['Rohail Raza','25. India'],
  ['Romessa Shaikh','29. South Korea'],
  ['Romo Islam','15. Italy'],
  ['Rono Islam','15. Italy'],
  ['Rozmeen Shahid','5. Brazil'],
  ['Rwoof Reshi','22. Mexico'],
  ['Saad Shahzad','28. Japan'],
  ['Saaleh Akmal','4. Jamaica'],
  ['Sabeen Askari','7. United Kingdom'],
  ['Sabeen Fatima','7. United Kingdom'],
  ['Saghir Abid','22. Mexico'],
  ['Saima Abbas','8. Spain'],
  ['Saira Chaudhry','30. Australia'],
  ['Saira Mitha','11. Poland'],
  ['Sakina Shah','29. South Korea'],
  ['Saleem Jafri','2. Canada'],
  ['Saleem Raza','7. United Kingdom'],
  ['Saleha Asim','13. Palestine'],
  ['Salim Kathawalla','16. Greece'],
  ['Salima Naqvi','22. Mexico'],
  ['Salman Mitha','16. Greece'],
  ['Sana Ikramuddin','23. Bangladesh'],
  ['Sana Jafferi','24. Egypt'],
  ['Sana Kagalwalla','20. Qatar'],
  ['Sanaa Kazmi','28. Japan'],
  ['Saniya Syed','30. Australia'],
  ['Saqeba Iqbal','12. Turkey'],
  ['Saqib Khwaja','26. Singapore'],
  ['Sara Ali','23. Bangladesh'],
  ['Sarah Abbas','6. Wales'],
  ['Sarah Hussain','1. United States'],
  ['Sarfarz Jabiru','10. Ireland'],
  ['Sarmad Abbas','8. Spain'],
  ['Sayeed Ikramuddin','16. Greece'],
  ['Seema Altaf','12. Turkey'],
  ['Shabbar Kazmi','9. France'],
  ['Shafqat Ullah','18. Netherlands'],
  ['Shaghil Hussain','1. United States'],
  ['Shahab Abbas','8. Spain'],
  ['Shaheen Saghir','22. Mexico'],
  ['Shaheen Sohail Zubairi','30. Australia'],
  ['Shahid Yaqoob','9. France'],
  ['Shahla Khan','12. Turkey'],
  ['Shahmeer Raza','8. Spain'],
  ['Shaista Farooq','3. Pakistan'],
  ['Shaista Tajamal','13. Palestine'],
  ['Shaqib Habib','28. Japan'],
  ['Shayan Ahmad','2. Canada'],
  ['Shaz Iqbal','20. Qatar'],
  ['Shazia Asher','11. Poland'],
  ['Shazia Rahman','11. Poland'],
  ['Shehbana Mahmood','5. Brazil'],
  ['Shehla Alavi','7. United Kingdom'],
  ['Shehnaz Budhabhoy','13. Palestine'],
  ['Shehryar Husnain','4. Jamaica'],
  ['Shifa Syeda','27. China'],
  ['Shireen Raza','8. Spain'],
  ['Sid Paari','24. Egypt'],
  ['Sikandar Bashir','16. Greece'],
  ['Sikandar Dar','18. Netherlands'],
  ['Sima Gilani','13. Palestine'],
  ['Simi Akhtar','13. Palestine'],
  ['Sofia D','1. United States'],
  ['Sohail Ahmed Zubairi','16. Greece'],
  ['Sumaira Misba','5. Brazil'],
  ['Sumaiya Kaiser','27. China'],
  ['Syed Ali','14. Morocco'],
  ['Syed Askari','7. United Kingdom'],
  ['Tabinda Altafullah','12. Turkey'],
  ['Taha Muhammed','6. Wales'],
  ['Tanveer Mahmood','11. Poland'],
  ['Tariq Mahmood','17. Hungary'],
  ['Turab Naqvi','20. Qatar'],
  ['Ummara Shabbir','5. Brazil'],
  ['Uncle Sajjad','7. United Kingdom'],
  ['Uzma Ali','2. Canada'],
  ['Uzma Mohsin','5. Brazil'],
  ['Uzma Samadani','11. Poland'],
  ['Videographer Blake Cohen','31. Ethiopia'],
  ['Videographer Michael Garlinghouse','31. Ethiopia'],
  ['Walia Hasan','3. Pakistan'],
  ['Walid Abid','25. India'],
  ['Wasim Khan','14. Morocco'],
  ['Yasmin Chaudhri','11. Poland'],
  ['Yusra Murad','29. South Korea'],
  ['Zahra Bashir','29. South Korea'],
  ['Zahra Naqi','20. Qatar'],
  ['Zahra Sajjad','7. United Kingdom'],
  ['Zaid Saeed','24. Egypt'],
  ['Zain','15. Italy'],
  ['Zain','19. Somalia'],
  ['Zainub Abbas','6. Wales'],
  ['Zan Abbas','6. Wales'],
  ['Zara Raza','23. Bangladesh'],
  ['Zayn Tajamal','25. India'],
  ['Zeeshawn Abid','25. India'],
  ['Zehra Abbas','3. Pakistan'],
  ['Zehra Raza','8. Spain'],
  ['Zeyini Mohammed','27. China'],
  ['Zoya Abbas','6. Wales']
];

function createTable(tableData, selector = 'table') {
      const existing = document.querySelectorAll(selector + ' td');
      if (existing.length > 0) {
        Array.prototype.forEach.call( existing, function( node ) {
          node.parentNode.removeChild( node );
      });
      }
      var table = document.querySelector(selector);
      var row = {};
      var cell = {};
    
      tableData.forEach((rowData) => {
        row = table.insertRow(-1);
        rowData.forEach((cellData) => {
          cell = row.insertCell();
    			cell.textContent = cellData;
        });
      });
      document.body.appendChild(table);
    }

// How many rows should be shown
const rowCount = 12;
const timedDisplay = () => {
var i = rowCount*3;
const intr = setInterval(() => {
        const j = i+rowCount;
        const k = j+rowCount;
        const l = k+rowCount <= guestList.length ? k+rowCount : guestList.length;
        createTable(guestList.slice(i,j), '#left');
        createTable(guestList.slice(j,k), '#middle');
        createTable(guestList.slice(k,l), '#right');
        if (l === guestList.length) {
          i = 0;
        } else {
          i+= rowCount*3;
        }
      }, 20000)
};

// Initialize
if( screen.width <= 768 ) {
createTable(guestList);
} else {
createTable(guestList.slice(0,rowCount), '#left');
createTable(guestList.slice(rowCount,rowCount*2), '#middle');
createTable(guestList.slice(rowCount*2,rowCount*3), '#right');
timedDisplay();
}