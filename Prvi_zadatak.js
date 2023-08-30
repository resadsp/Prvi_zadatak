window.alert("Napisati program koji racuna sumu brojeva koje je uneo korisnik. Korisnik prvo unosi koliko koliko brojeva zeli da sabere a posle svaki broj ponaosob.")
let n=prompt("UNESITE KOLIKO BROJEVA ZELITE DA SABERETE");
let a = [];
for (let i=1; i<=n; i++){
   a[i] = Number(prompt ("Unesite "+i+ " broj")); 
}
let k =0;
for (let i=1; i<=n; i++){
 k = k+a[i];
}
window.alert("Suma bojeva koje je uneo gorisnik iznosi: "+k);