const lastModDate = new Date(document.lastModified);
let strMD = 'Last Updated: ' + lastModDate.getMonth() + '/' + lastModDate.getDate() + '/' + lastModDate.getFullYear() + ' -- ' + lastModDate.getHours() + ':' + lastModDate.getMinutes() + ':' + lastModDate.getSeconds();
document.getElementById('date-modified').textContent = strMD;