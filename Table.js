<!DOCTYPE html>
<html>
  <head>
    <script>
      function drawTable() {
        var num1 = document.getElementById("inputtxt1").value;
        var num2 = document.getElementById("inputtxt2").value;

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        document.write("<table border='5'>");

        for (let i = 1; i <= num2; i++) {
          document.write("<tr>");

          for (let j = 1; j <= num1; j++) {
            document.write("<td background='apple.jpg'>~~~~~" + i + " - " + j);

            document.write("~~~~~</td>");
          }

          document.write("</tr>");
        }

        document.write("</table>");
      }
    </script>
  </head>
  <body>
    Input a number 1:
    <input type="text" id="inputtxt1" /><br />

    Input a number 2:
    <input type="text" id="inputtxt2" /><br />
    <input type="button" value="DRAW TABLE" onclick="drawTable()" />
  </body>
</html>
