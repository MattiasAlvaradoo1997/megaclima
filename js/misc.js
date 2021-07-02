function Restriccion(string){
    var out = '';
    var filtro = '1234567890kK';//Caracteres validos
	 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             
	     out += string.charAt(i);

    return out;
} 