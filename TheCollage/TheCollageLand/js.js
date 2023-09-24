

function me() {
   // this for name
   var a = document.form.name.value;
   //thhis for cer mark
   var c = document.form.cet_mark.value
   //this for 12th marks
   var b = document.form.t_mark.value
   //this for branch
   var d = document.getElementById("bran").selectedIndex;
   //this for cast
   var f = document.getElementById("ca").selectedIndex;




   //  its for name validation
   let x = document.forms["form"]["name"].value;
   if (x == "") {
      alert("Name must be filled out");
      return false;
   }



   // its for email validation
   let y = document.forms["form"]["mail"].value;
   if (y == "") {
      alert("Email must be filled out");
      return false;
   }



   // its for CET mark validation
   let z = document.forms["form"]["cet_mark"].value;
   if (z == "") {
      alert("CET marks must be filled out");
      return false;
   }


   // its for 12th mark validation
   let p = document.forms["form"]["t_mark"].value;
   if (p == "") {
      alert("12th marks must be filled out");
      return false;
   }


   // its for contact number validation
   let q = document.forms["form"]["number"].value;
   if (q == "") {
      alert("contact number must be filled out");
      return false;
   }

   // its for cast validation
   if (f == "") {
      alert("Cast must be filled out");
      return false;
   }


   // its for branch validation
   if (d == "") {
      alert("Branch must be filled out");
      return false;
   }


   // computer branch open cast

   if (d == 1 && c >= 95 && c <= 100 && b >= 50 && f == 1) {
      window.open('PDF1.pdf', '_blank', 'fullscreen=yes');
      return true;

   }


   else if (d == 1 && c >= 90 && c <= 95 && b >= 50 && f == 1) {
      window.open('PDF2.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 1 && c >= 85 && c <= 90 && b >= 50 && f == 1) {
      window.open('PDF3.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 80 && c <= 85 && b >= 50 && f == 1) {
      window.open('PDF4.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 70 && c <= 80 && b >= 50 && f == 1) {
      window.open('PDF5.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 60 && c <= 70 && b >= 50 && f == 1) {
      window.open('PDF6.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 50 && c <= 60 && b >= 50 && f == 1) {
      window.open('PDF7.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 40 && c <= 50 && b >= 50 && f == 1) {
      window.open('PDF8.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 0 && c <= 40 && b >= 50 && f == 1) {
      window.open('PDF9.pdf', '_blank', 'fullscreen=yes');
      return false;

   }


   // computer branch obc cast

   else if (d == 1 && c >= 95 && c <= 100 && b >= 50 && f == 2) {
      window.open('PDF11.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 90 && c <= 95 && b >= 50 && f == 2) {
      window.open('PDF12.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 85 && c <= 90 && b >= 50 && f == 2) {
      window.open('PDF13.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 80 && c <= 85 && b >= 50 && f == 2) {
      window.open('PDF14.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 70 && c <= 80 && b >= 50 && f == 2) {
      window.open('PDF15.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 60 && c <= 70 && b >= 50 && f == 2) {
      window.open('PDF16.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 50 && c <= 60 && b >= 50 && f == 2) {
      window.open('PDF17.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 40 && c <= 50 && b >= 50 && f == 2) {
      window.open('PDF18.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 30 && c <= 40 && b >= 50 && f == 2) {
      window.open('PDF19.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 0 && c <= 30 && b >= 50 && f == 2) {
      window.open('PDF20.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // computer branch NT cast

   else if (d == 1 && c >= 95 && c <= 100 && b >= 50 && f == 3) {
      window.open('PDF21.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 90 && c <= 95 && b >= 50 && f == 3) {
      window.open('PDF22.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 85 && c <= 90 && b >= 50 && f == 3) {
      window.open('PDF23.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 80 && c <= 85 && b >= 50 && f == 3) {
      window.open('PDF24.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 70 && c <= 80 && b >= 50 && f == 3) {
      window.open('PDF25.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 60 && c <= 70 && b >= 50 && f == 3) {
      window.open('PDF26.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 50 && c <= 60 && b >= 50 && f == 3) {
      window.open('PDF27.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 40 && c <= 50 && b >= 50 && f == 3) {
      window.open('PDF28.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 30 && c <= 40 && b >= 50 && f == 3) {
      window.open('PDF29.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 0 && c <= 30 && b >= 50 && f == 3) {
      window.open('PDF30.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // computer branch SC cast

   else if (d == 1 && c >= 95 && c <= 100 && b >= 50 && f == 4) {
      window.open('PDF31.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 90 && c <= 95 && b >= 50 && f == 4) {
      window.open('PDF32.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 85 && c <= 90 && b >= 50 && f == 4) {
      window.open('PDF33.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 80 && c <= 85 && b >= 50 && f == 4) {
      window.open('PDF34.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 70 && c <= 80 && b >= 50 && f == 4) {
      window.open('PDF35.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 60 && c <= 70 && b >= 50 && f == 4) {
      window.open('PDF36.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 50 && c <= 60 && b >= 50 && f == 4) {
      window.open('PDF37.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 40 && c <= 50 && b >= 50 && f == 4) {
      window.open('PDF38.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 30 && c <= 40 && b >= 50 && f == 4) {
      window.open('PDF39.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 0 && c <= 30 && b >= 50 && f == 4) {
      window.open('PDF40.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // computer branch ST cast
   else if (d == 1 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('PDF41.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 90 && c <= 95 && b >= 50 && f == 5) {
      window.open('PDF42.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 85 && c <= 90 && b >= 50 && f == 5) {
      window.open('PDF43.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 80 && c <= 85 && b >= 50 && f == 5) {
      window.open('PDF44.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 70 && c <= 80 && b >= 50 && f == 5) {
      window.open('PDF45.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 60 && c <= 70 && b >= 50 && f == 5) {
      window.open('PDF46.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 50 && c <= 60 && b >= 50 && f == 5) {
      window.open('PDF47.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 0 && c <= 40 && b >= 50 && f == 5) {
      window.open('PDF48.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 30 && c <= 40 && b >= 50 && f == 5) {
      window.open('PDF49.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 1 && c >= 0 && c <= 30 && b >= 50 && f == 5) {
      window.open('PDF50.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // it branch open cast 
   else if (d == 2 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('PDF51.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 2 && c >= 90 && c <= 95 && b >= 50 && f == 1) {
      window.open('PDF52.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 2 && c >= 85 && c <= 90 && b >= 50 && f == 1) {
      window.open('PDF53.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 80 && c <= 85 && b >= 50 && f == 1) {
      window.open('PDF54.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 70 && c <= 80 && b >= 50 && f == 1) {
      window.open('PDF55.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 60 && c <= 70 && b >= 50 && f == 1) {
      window.open('PDF56.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 50 && c <= 60 && b >= 50 && f == 1) {
      window.open('PDF57.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 40 && c <= 50 && b >= 50 && f == 1) {
      window.open('PDF58.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 30 && c <= 40 && b >= 50 && f == 1) {
      window.open('PDF59.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 0 && c <= 30 && b >= 50 && f == 1) {
      window.open('PDF60.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // it obc cast

   else if (d == 2 && c >= 95 && c <= 100 && b >= 50 && f == 2) {
      window.open('PDF61.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 90 && c <= 95 && b >= 50 && f == 2) {
      window.open('PDF62.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 85 && c <= 90 && b >= 50 && f == 2) {
      window.open('PDF63.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 80 && c <= 85 && b >= 50 && f == 2) {
      window.open('PDF64.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 70 && c <= 80 && b >= 50 && f == 2) {
      window.open('PDF65.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 60 && c <= 70 && b >= 50 && f == 2) {
      window.open('PDF66.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 50 && c <= 60 && b >= 50 && f == 2) {
      window.open('PDF67.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 40 && c <= 50 && b >= 50 && f == 2) {
      window.open('PDF68.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 30 && c <= 40 && b >= 50 && f == 2) {
      window.open('PDF69.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 0 && c <= 30 && b >= 50 && f == 2) {
      window.open('PDF70.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // it NT cast

   else if (d == 2 && c >= 95 && c <= 100 && b >= 50 && f == 3) {
      window.open('PDF71.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 90 && c <= 95 && b >= 50 && f == 3) {
      window.open('PDF72.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 85 && c <= 90 && b >= 50 && f == 3) {
      window.open('PDF73.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 80 && c <= 85 && b >= 50 && f == 3) {
      window.open('PDF74.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 70 && c <= 80 && b >= 50 && f == 3) {
      window.open('PDF75.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 60 && c <= 70 && b >= 50 && f == 3) {
      window.open('PDF76.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 50 && c <= 60 && b >= 50 && f == 3) {
      window.open('PDF77.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 40 && c <= 50 && b >= 50 && f == 3) {
      window.open('PDF78.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 30 && c <= 40 && b >= 50 && f == 3) {
      window.open('PDF79.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 0 && c <= 30 && b >= 50 && f == 3) {
      window.open('PDF80.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // it sc cast

   else if (d == 2 && c >= 95 && c <= 100 && b >= 50 && f == 4) {
      window.open('PDF81.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 90 && c <= 95 && b >= 50 && f == 4) {
      window.open('PDF82.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 85 && c <= 90 && b >= 50 && f == 4) {
      window.open('PDF83.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 80 && c <= 85 && b >= 50 && f == 4) {
      window.open('PDF84.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 70 && c <= 80 && b >= 50 && f == 4) {
      window.open('PDF85.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 60 && c <= 70 && b >= 50 && f == 4) {
      window.open('PDF86.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 50 && c <= 60 && b >= 50 && f == 4) {
      window.open('PDF87.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 40 && c <= 50 && b >= 50 && f == 4) {
      window.open('PDF88.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 30 && c <= 40 && b >= 50 && f == 4) {
      window.open('PDF89.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 0 && c <= 30 && b >= 50 && f == 4) {
      window.open('PDF90.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // it St cast

   else if (d == 2 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('PDF91.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 90 && c <= 95 && b >= 50 && f == 5) {
      window.open('PDF92.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 85 && c <= 90 && b >= 50 && f == 5) {
      window.open('PDF93.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 80 && c <= 85 && b >= 50 && f == 5) {
      window.open('PDF94.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 70 && c <= 80 && b >= 50 && f == 5) {
      window.open('PDF95.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 60 && c <= 70 && b >= 50 && f == 5) {
      window.open('PDF96.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 50 && c <= 60 && b >= 50 && f == 5) {
      window.open('PDF97.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 0 && c <= 40 && b >= 50 && f == 5) {
      window.open('PDF98.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 30 && c <= 40 && b >= 50 && f == 5) {
      window.open('PDF99.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 2 && c >= 0 && c <= 30 && b >= 50 && f == 5) {
      window.open('PDF100.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // E&TC open cast

   else if (d == 3 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('PDF101.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 3 && c >= 90 && c <= 95 && b >= 50 && f == 1) {
      window.open('PDF102.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 3 && c >= 85 && c <= 90 && b >= 50 && f == 1) {
      window.open('PDF103.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 80 && c <= 85 && b >= 50 && f == 1) {
      window.open('PDF104.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 70 && c <= 80 && b >= 50 && f == 1) {
      window.open('PDF105.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 60 && c <= 70 && b >= 50 && f == 1) {
      window.open('PDF106.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 50 && c <= 60 && b >= 50 && f == 1) {
      window.open('PDF107.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 40 && c <= 50 && b >= 50 && f == 1) {
      window.open('PDF108.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 30 && c <= 40 && b >= 50 && f == 1) {
      window.open('PDF109.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 0 && c <= 30 && b >= 50 && f == 1) {
      window.open('PDF110.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // E&TC obc cast

   else if (d == 3 && c >= 95 && c <= 100 && b >= 50 && f == 2) {
      window.open('PDF111.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 90 && c <= 95 && b >= 50 && f == 2) {
      window.open('PDF112.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 85 && c <= 90 && b >= 50 && f == 2) {
      window.open('PDF113.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 80 && c <= 85 && b >= 50 && f == 2) {
      window.open('PDF114.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 70 && c <= 80 && b >= 50 && f == 2) {
      window.open('PDF115.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 60 && c <= 70 && b >= 50 && f == 2) {
      window.open('PDF116.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 50 && c <= 60 && b >= 50 && f == 2) {
      window.open('PDF117.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 40 && c <= 50 && b >= 50 && f == 2) {
      window.open('PDF118.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 30 && c <= 40 && b >= 50 && f == 2) {
      window.open('PDF119.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 0 && c <= 30 && b >= 50 && f == 2) {
      window.open('PDF120.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   //  E&TC NT cast

   else if (d == 3 && c >= 95 && c <= 100 && b >= 50 && f == 3) {
      window.open('PDF121.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 90 && c <= 95 && b >= 50 && f == 3) {
      window.open('PDF122.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 85 && c <= 90 && b >= 50 && f == 3) {
      window.open('PDF123.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 80 && c <= 85 && b >= 50 && f == 3) {
      window.open('PDF124.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 70 && c <= 80 && b >= 50 && f == 3) {
      window.open('PDF125.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 60 && c <= 70 && b >= 50 && f == 3) {
      window.open('PDF126.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 50 && c <= 60 && b >= 50 && f == 3) {
      window.open('PDF127.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 40 && c <= 50 && b >= 50 && f == 3) {
      window.open('PDF128.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 30 && c <= 40 && b >= 50 && f == 3) {
      window.open('PDF129.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 0 && c <= 30 && b >= 50 && f == 3) {
      window.open('PDF130.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // E&TC SC cast

   else if (d == 3 && c >= 95 && c <= 100 && b >= 50 && f == 4) {
      window.open('PDF131.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 90 && c <= 95 && b >= 50 && f == 4) {
      window.open('PDF132.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 85 && c <= 90 && b >= 50 && f == 4) {
      window.open('PDF133.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 80 && c <= 85 && b >= 50 && f == 4) {
      window.open('PDF134.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 70 && c <= 80 && b >= 50 && f == 4) {
      window.open('PDF135.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 60 && c <= 70 && b >= 50 && f == 4) {
      window.open('PDF136.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 50 && c <= 60 && b >= 50 && f == 4) {
      window.open('PDF137.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 40 && c <= 50 && b >= 50 && f == 4) {
      window.open('PDF138.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 30 && c <= 40 && b >= 50 && f == 4) {
      window.open('PDF139.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 0 && c <= 30 && b >= 50 && f == 4) {
      window.open('PDF140.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // E&TC st cast

   else if (d == 3 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('PDF141.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 90 && c <= 95 && b >= 50 && f == 5) {
      window.open('PDF142.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 85 && c <= 90 && b >= 50 && f == 5) {
      window.open('PDF143.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 80 && c <= 85 && b >= 50 && f == 5) {
      window.open('PDF144.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 70 && c <= 80 && b >= 50 && f == 5) {
      window.open('PDF145.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 60 && c <= 70 && b >= 50 && f == 5) {
      window.open('PDF146.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 50 && c <= 60 && b >= 50 && f == 5) {
      window.open('PDF147.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 0 && c <= 40 && b >= 50 && f == 5) {
      window.open('PDF148.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 30 && c <= 40 && b >= 50 && f == 5) {
      window.open('PDF149.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 3 && c >= 0 && c <= 30 && b >= 50 && f == 5) {
      window.open('PDF150.pdf', '_blank', 'fullscreen=yes');
      return false;

   }


   // Civil open cast
   else if (d == 4 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('PDF151.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 4 && c >= 90 && c <= 95 && b >= 50 && f == 1) {
      window.open('PDF152.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 4 && c >= 85 && c <= 90 && b >= 50 && f == 1) {
      window.open('PDF153.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 80 && c <= 85 && b >= 50 && f == 1) {
      window.open('PDF154.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 70 && c <= 80 && b >= 50 && f == 1) {
      window.open('PDF155.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 60 && c <= 70 && b >= 50 && f == 1) {
      window.open('PDF156.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 50 && c <= 60 && b >= 50 && f == 1) {
      window.open('PDF157.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 40 && c <= 50 && b >= 50 && f == 1) {
      window.open('PDF158.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 30 && c <= 40 && b >= 50 && f == 1) {
      window.open('PDF159.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 0 && c <= 30 && b >= 50 && f == 1) {
      window.open('PDF160.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // Civil obc cast

   else if (d == 4 && c >= 95 && c <= 100 && b >= 50 && f == 2) {
      window.open('PDF161.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 90 && c <= 95 && b >= 50 && f == 2) {
      window.open('PDF162.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 85 && c <= 90 && b >= 50 && f == 2) {
      window.open('PDF163.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 80 && c <= 85 && b >= 50 && f == 2) {
      window.open('PDF164.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 70 && c <= 80 && b >= 50 && f == 2) {
      window.open('PDF165.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 60 && c <= 70 && b >= 50 && f == 2) {
      window.open('PDF166.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 50 && c <= 60 && b >= 50 && f == 2) {
      window.open('PDF167.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 40 && c <= 50 && b >= 50 && f == 2) {
      window.open('PDF168.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 30 && c <= 40 && b >= 50 && f == 2) {
      window.open('PDF169.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 0 && c <= 30 && b >= 50 && f == 2) {
      window.open('PDF170.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // Civil nt cast

   else if (d == 4 && c >= 95 && c <= 100 && b >= 50 && f == 3) {
      window.open('PDF171.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 90 && c <= 95 && b >= 50 && f == 3) {
      window.open('PDF172.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 85 && c <= 90 && b >= 50 && f == 3) {
      window.open('PDF173.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 80 && c <= 85 && b >= 50 && f == 3) {
      window.open('PDF174.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 70 && c <= 80 && b >= 50 && f == 3) {
      window.open('PDF175.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 60 && c <= 70 && b >= 50 && f == 3) {
      window.open('PDF176.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 50 && c <= 60 && b >= 50 && f == 3) {
      window.open('PDF177.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 40 && c <= 50 && b >= 50 && f == 3) {
      window.open('PDF178.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 30 && c <= 40 && b >= 50 && f == 3) {
      window.open('PDF179.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 0 && c <= 30 && b >= 50 && f == 3) {
      window.open('PDF180.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // Civil SC cast

   else if (d == 4 && c >= 95 && c <= 100 && b >= 50 && f == 4) {
      window.open('PDF181.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 90 && c <= 95 && b >= 50 && f == 4) {
      window.open('PDF182.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 85 && c <= 90 && b >= 50 && f == 4) {
      window.open('PDF183.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 80 && c <= 85 && b >= 50 && f == 4) {
      window.open('PDF184.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 70 && c <= 80 && b >= 50 && f == 4) {
      window.open('PDF185.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 60 && c <= 70 && b >= 50 && f == 4) {
      window.open('PDF186.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 50 && c <= 60 && b >= 50 && f == 4) {
      window.open('PDF187.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 40 && c <= 50 && b >= 50 && f == 4) {
      window.open('PDF188.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 30 && c <= 40 && b >= 50 && f == 4) {
      window.open('PDF189.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 0 && c <= 30 && b >= 50 && f == 4) {
      window.open('PDF190.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // Civil St cast

   else if (d == 4 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('PDF191.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 90 && c <= 95 && b >= 50 && f == 5) {
      window.open('PDF192.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 85 && c <= 90 && b >= 50 && f == 5) {
      window.open('PDF193.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 80 && c <= 85 && b >= 50 && f == 5) {
      window.open('PDF194.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 70 && c <= 80 && b >= 50 && f == 5) {
      window.open('PDF195.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 60 && c <= 70 && b >= 50 && f == 5) {
      window.open('PDF196.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 50 && c <= 60 && b >= 50 && f == 5) {
      window.open('PDF197.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 0 && c <= 40 && b >= 50 && f == 5) {
      window.open('PDF198.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 30 && c <= 40 && b >= 50 && f == 5) {
      window.open('PDF199.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 4 && c >= 0 && c <= 30 && b >= 50 && f == 5) {
      window.open('PDF200.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // MECH open cast

   else if (d == 5 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('PDF201.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 5 && c >= 90 && c <= 95 && b >= 50 && f == 1) {
      window.open('PDF202.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 5 && c >= 85 && c <= 90 && b >= 50 && f == 1) {
      window.open('PDF203.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 80 && c <= 85 && b >= 50 && f == 1) {
      window.open('PDF204.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 70 && c <= 80 && b >= 50 && f == 1) {
      window.open('PDF205.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 60 && c <= 70 && b >= 50 && f == 1) {
      window.open('PDF206.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 50 && c <= 60 && b >= 50 && f == 1) {
      window.open('PDF207.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 40 && c <= 50 && b >= 50 && f == 1) {
      window.open('PDF208.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 30 && c <= 40 && b >= 50 && f == 1) {
      window.open('PDF209.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 0 && c <= 30 && b >= 50 && f == 1) {
      window.open('PDF210.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // MECH obc cast

   else if (d == 5 && c >= 95 && c <= 100 && b >= 50 && f == 2) {
      window.open('PDF211.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 90 && c <= 95 && b >= 50 && f == 2) {
      window.open('PDF212.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 85 && c <= 90 && b >= 50 && f == 2) {
      window.open('PDF213.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 80 && c <= 85 && b >= 50 && f == 2) {
      window.open('PDF214.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 70 && c <= 80 && b >= 50 && f == 2) {
      window.open('PDF215.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 60 && c <= 70 && b >= 50 && f == 2) {
      window.open('PDF216.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 50 && c <= 60 && b >= 50 && f == 2) {
      window.open('PDF217.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 40 && c <= 50 && b >= 50 && f == 2) {
      window.open('PDF218.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 30 && c <= 40 && b >= 50 && f == 2) {
      window.open('PDF219.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 0 && c <= 30 && b >= 50 && f == 2) {
      window.open('PDF220.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // MECH NT cast

   else if (d == 5 && c >= 95 && c <= 100 && b >= 50 && f == 3) {
      window.open('PDF221.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 90 && c <= 95 && b >= 50 && f == 3) {
      window.open('PDF222.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 85 && c <= 90 && b >= 50 && f == 3) {
      window.open('PDF223.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 80 && c <= 85 && b >= 50 && f == 3) {
      window.open('PDF224.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 70 && c <= 80 && b >= 50 && f == 3) {
      window.open('PDF225.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 60 && c <= 70 && b >= 50 && f == 3) {
      window.open('PDF226.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 50 && c <= 60 && b >= 50 && f == 3) {
      window.open('PDF227.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 40 && c <= 50 && b >= 50 && f == 3) {
      window.open('PDF228.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 30 && c <= 40 && b >= 50 && f == 3) {
      window.open('PDF229.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 0 && c <= 30 && b >= 50 && f == 3) {
      window.open('PDF230.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // MECH SC cast

   else if (d == 5 && c >= 95 && c <= 100 && b >= 50 && f == 4) {
      window.open('PDF231.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 90 && c <= 95 && b >= 50 && f == 4) {
      window.open('PDF232.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 85 && c <= 90 && b >= 50 && f == 4) {
      window.open('PDF233.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 80 && c <= 85 && b >= 50 && f == 4) {
      window.open('PDF234.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 70 && c <= 80 && b >= 50 && f == 4) {
      window.open('PDF235.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 60 && c <= 70 && b >= 50 && f == 4) {
      window.open('PDF236.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 50 && c <= 60 && b >= 50 && f == 4) {
      window.open('PDF237.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 40 && c <= 50 && b >= 50 && f == 4) {
      window.open('PDF238.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 30 && c <= 40 && b >= 50 && f == 4) {
      window.open('PDF239.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 0 && c <= 30 && b >= 50 && f == 4) {
      window.open('PDF240.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // MECH ST cast

   else if (d == 5 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('PDF241.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 90 && c <= 95 && b >= 50 && f == 5) {
      window.open('PDF242.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 85 && c <= 90 && b >= 50 && f == 5) {
      window.open('PDF243.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 80 && c <= 85 && b >= 50 && f == 5) {
      window.open('PDF244.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 70 && c <= 80 && b >= 50 && f == 5) {
      window.open('PDF245.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 60 && c <= 70 && b >= 50 && f == 5) {
      window.open('PDF246.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 50 && c <= 60 && b >= 50 && f == 5) {
      window.open('PDF247.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 40 && c <= 50 && b >= 50 && f == 5) {
      window.open('PDF248.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 30 && c <= 40 && b >= 50 && f == 5) {
      window.open('PDF249.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 5 && c >= 0 && c <= 30 && b >= 50 && f == 5) {
      window.open('PDF250.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // pharma open cast
   else if (d == 6 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('301.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 6 && c >= 90 && c <= 95 && b >= 50 && f == 1) {
      window.open('302.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 6 && c >= 85 && c <= 90 && b >= 50 && f == 1) {
      window.open('303.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 80 && c <= 85 && b >= 50 && f == 1) {
      window.open('304.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 70 && c <= 80 && b >= 50 && f == 1) {
      window.open('305.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 60 && c <= 70 && b >= 50 && f == 1) {
      window.open('306.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 50 && c <= 60 && b >= 50 && f == 1) {
      window.open('307.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 40 && c <= 50 && b >= 50 && f == 1) {
      window.open('308.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 30 && c <= 40 && b >= 50 && f == 1) {
      window.open('309.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 0 && c <= 30 && b >= 50 && f == 1) {
      window.open('310.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // pharma obc cast

   else if (d == 6 && c >= 95 && c <= 100 && b >= 50 && f == 2) {
      window.open('311.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 90 && c <= 95 && b >= 50 && f == 2) {
      window.open('312.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 85 && c <= 90 && b >= 50 && f == 2) {
      window.open('313.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 80 && c <= 85 && b >= 50 && f == 2) {
      window.open('314.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 70 && c <= 80 && b >= 50 && f == 2) {
      window.open('315.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 60 && c <= 70 && b >= 50 && f == 2) {
      window.open('316.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 50 && c <= 60 && b >= 50 && f == 2) {
      window.open('317.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 40 && c <= 50 && b >= 50 && f == 2) {
      window.open('318.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 30 && c <= 40 && b >= 50 && f == 2) {
      window.open('319.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 0 && c <= 30 && b >= 50 && f == 2) {
      window.open('320.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // pharma NT cast

   else if (d == 6 && c >= 95 && c <= 100 && b >= 50 && f == 3) {
      window.open('321.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 90 && c <= 95 && b >= 50 && f == 3) {
      window.open('322.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 85 && c <= 90 && b >= 50 && f == 3) {
      window.open('323.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 80 && c <= 85 && b >= 50 && f == 3) {
      window.open('324.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 70 && c <= 80 && b >= 50 && f == 3) {
      window.open('325.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 60 && c <= 70 && b >= 50 && f == 3) {
      window.open('326.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 50 && c <= 60 && b >= 50 && f == 3) {
      window.open('327.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 40 && c <= 50 && b >= 50 && f == 3) {
      window.open('328.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 30 && c <= 40 && b >= 50 && f == 3) {
      window.open('329.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 0 && c <= 30 && b >= 50 && f == 3) {
      window.open('330.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // pharma SC cast

   else if (d == 6 && c >= 95 && c <= 100 && b >= 50 && f == 4) {
      window.open('331.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 90 && c <= 95 && b >= 50 && f == 4) {
      window.open('332.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 85 && c <= 90 && b >= 50 && f == 4) {
      window.open('333.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 80 && c <= 85 && b >= 50 && f == 4) {
      window.open('334.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 70 && c <= 80 && b >= 50 && f == 4) {
      window.open('335.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 60 && c <= 70 && b >= 50 && f == 4) {
      window.open('336.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 50 && c <= 60 && b >= 50 && f == 4) {
      window.open('337.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 40 && c <= 50 && b >= 50 && f == 4) {
      window.open('338.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 30 && c <= 40 && b >= 50 && f == 4) {
      window.open('339.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 0 && c <= 30 && b >= 50 && f == 4) {
      window.open('340.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // pharma ST cast

   else if (d == 6 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('341.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 90 && c <= 95 && b >= 50 && f == 5) {
      window.open('342.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 85 && c <= 90 && b >= 50 && f == 5) {
      window.open('343.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 80 && c <= 85 && b >= 50 && f == 5) {
      window.open('344.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 70 && c <= 80 && b >= 50 && f == 5) {
      window.open('345.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 60 && c <= 70 && b >= 50 && f == 5) {
      window.open('346.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 50 && c <= 60 && b >= 50 && f == 5) {
      window.open('347.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 40 && c <= 50 && b >= 50 && f == 5) {
      window.open('348.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 30 && c <= 40 && b >= 50 && f == 5) {
      window.open('349.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 6 && c >= 0 && c <= 30 && b >= 50 && f == 5) {
      window.open('350.pdf', '_blank', 'fullscreen=yes');
      return false;

   }


   // agri open cast

   else if (d == 7 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('351.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 7 && c >= 90 && c <= 95 && b >= 50 && f == 1) {
      window.open('352.pdf', '_blank', 'fullscreen=yes');
      return false;

   }
   else if (d == 7 && c >= 85 && c <= 90 && b >= 50 && f == 1) {
      window.open('353.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 80 && c <= 85 && b >= 50 && f == 1) {
      window.open('354.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 70 && c <= 80 && b >= 50 && f == 1) {
      window.open('355.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 60 && c <= 70 && b >= 50 && f == 1) {
      window.open('356.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 50 && c <= 60 && b >= 50 && f == 1) {
      window.open('357.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 40 && c <= 50 && b >= 50 && f == 1) {
      window.open('358.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 30 && c <= 40 && b >= 50 && f == 1) {
      window.open('359.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 0 && c <= 30 && b >= 50 && f == 1) {
      window.open('360.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // agri obc cast

   else if (d == 7 && c >= 95 && c <= 100 && b >= 50 && f == 2) {
      window.open('361.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 90 && c <= 95 && b >= 50 && f == 2) {
      window.open('362.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 85 && c <= 90 && b >= 50 && f == 2) {
      window.open('363.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 80 && c <= 85 && b >= 50 && f == 2) {
      window.open('364.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 70 && c <= 80 && b >= 50 && f == 2) {
      window.open('365.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 60 && c <= 70 && b >= 50 && f == 2) {
      window.open('366.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 50 && c <= 60 && b >= 50 && f == 2) {
      window.open('367.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 40 && c <= 50 && b >= 50 && f == 2) {
      window.open('368.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 30 && c <= 40 && b >= 50 && f == 2) {
      window.open('369.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 0 && c <= 30 && b >= 50 && f == 2) {
      window.open('370.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // agri nt cast

   else if (d == 7 && c >= 95 && c <= 100 && b >= 50 && f == 3) {
      window.open('371.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 90 && c <= 95 && b >= 50 && f == 3) {
      window.open('372.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 85 && c <= 90 && b >= 50 && f == 3) {
      window.open('373.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 80 && c <= 85 && b >= 50 && f == 3) {
      window.open('374.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 70 && c <= 80 && b >= 50 && f == 3) {
      window.open('375.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 60 && c <= 70 && b >= 50 && f == 3) {
      window.open('376.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 50 && c <= 60 && b >= 50 && f == 3) {
      window.open('377.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 40 && c <= 50 && b >= 50 && f == 3) {
      window.open('378.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 30 && c <= 40 && b >= 50 && f == 3) {
      window.open('379.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 0 && c <= 30 && b >= 50 && f == 3) {
      window.open('380.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // agri SC cast

   else if (d == 7 && c >= 95 && c <= 100 && b >= 50 && f == 4) {
      window.open('381.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 90 && c <= 95 && b >= 50 && f == 4) {
      window.open('382.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 85 && c <= 90 && b >= 50 && f == 4) {
      window.open('383.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 80 && c <= 85 && b >= 50 && f == 4) {
      window.open('384.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 70 && c <= 80 && b >= 50 && f == 4) {
      window.open('385.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 60 && c <= 70 && b >= 50 && f == 4) {
      window.open('386.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 50 && c <= 60 && b >= 50 && f == 4) {
      window.open('387.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 40 && c <= 50 && b >= 50 && f == 4) {
      window.open('388.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 30 && c <= 40 && b >= 50 && f == 4) {
      window.open('389.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 0 && c <= 30 && b >= 50 && f == 4) {
      window.open('390.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

   // Agri St cast

   else if (d == 7 && c >= 95 && c <= 100 && b >= 50 && f == 5) {
      window.open('391.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 90 && c <= 95 && b >= 50 && f == 5) {
      window.open('392.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 85 && c <= 90 && b >= 50 && f == 5) {
      window.open('393.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 80 && c <= 85 && b >= 50 && f == 5) {
      window.open('394.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 70 && c <= 80 && b >= 50 && f == 5) {
      window.open('395.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 60 && c <= 70 && b >= 50 && f == 5) {
      window.open('396.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 50 && c <= 60 && b >= 50 && f == 5) {
      window.open('397.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 0 && c <= 40 && b >= 50 && f == 5) {
      window.open('398.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 30 && c <= 40 && b >= 50 && f == 5) {
      window.open('399.pdf', '_blank', 'fullscreen=yes');
      return false;

   } else if (d == 7 && c >= 0 && c <= 30 && b >= 50 && f == 5) {
      window.open('400.pdf', '_blank', 'fullscreen=yes');
      return false;

   }

}
