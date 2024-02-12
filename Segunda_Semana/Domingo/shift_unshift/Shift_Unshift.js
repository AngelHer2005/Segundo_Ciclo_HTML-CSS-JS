var countries = ["Trujillo",
                "Arequipa",
                "Cusco",
                "Moquegua",
                "Huanuco",
                "Chachapoyas",
                "Madre de Dios",
                "Cañete"]

document.write("<p> El lugar más bonito es <em>");
document.write(countries[3]+ "</em></p>");
document.write("<p> El lugar con más historia es <em>")
document.write(countries[0]+ "</em></p>");
document.write("<p> El lugar que más me ha sorprendido es <em>");
document.write(countries[countries.length-1] + "</em><p>");
countries.unshift("Arequipa");
document.write("<p> El lugar más frío es <em>");
document.write(countries[0]+ "</em></p>");
countries.shift();
document.write("<p> El lugar más grande es <em>");
document.write(countries[4]+ "</em></p>");
countries.pop();
document.write("<p> El lugar más fascinante es <em>");
document.write(countries[countries.length-1]+"</em><p>")