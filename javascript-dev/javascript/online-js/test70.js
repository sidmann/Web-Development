var persons = new Array();
function addPerson()
{
	if(validate())
	{
		var myForm = document.forms[0];
		var firstName = myForm.firstName;
		var lastName = myForm.lastName;
		var age = myForm.age;
		var email = myForm.email;
		var person = { firstName: firstName.value,
					   lastName: lastName.value,
					   age: age.value,
					   email: email.value };
		if(myForm.editRecordId.value == -1)
		{
			persons[persons.length] = person;
		}
		else
		{
			persons.splice(myForm.editRecordId.value, 0, person);
			myForm.editRecordId.value = -1;
		}
		myForm.reset();
		populateData();
	}
}
function populateData()
{
	if(persons.length > 0)
	{
		var tableStr = "<table border='1'>";
		tableStr += "<tr><th>SNO</th><th>First Name</th>" +
		"<th>Last Name</th><th>AGE</th><th>EMAIL</th><th>DELETE</th></tr>";
		var person;
		for(var i = 0; i < persons.length; i++)
		{
			person = persons[i];
			tableStr += "<tr>";
			tableStr += "<td><a href='#' onclick='retrieve(" + i + ")'>" + ( i + 1 ) + "</a></td>";
			tableStr += "<td>" + person.firstName + "</td>";
			tableStr += "<td>" + person.lastName + "</td>";
			tableStr += "<td>" + person.age + "</td>";
			tableStr += "<td>" + person.email + "</td>";
			tableStr += "<td><a href='#' onclick='deleteRecord(" + i + ")'>delete " + person.firstName + "</a></td>";
			tableStr += "</tr>";
		}
		tableStr += "</table>";
		document.getElementById("data").innerHTML = tableStr;
		document.getElementById("submit").innerHTML = 
		"<input type='submit' value='submit'/>";
	}
	else
	{
		document.getElementById("data").innerHTML = "No records to display";
		document.getElementById("submit").innerHTML = "";
	}
}
function retrieve(index)
{
	var person = persons[index];
	persons.splice(index, 1);
	var myForm = document.forms[0];
	myForm.firstName.value = person.firstName;
	myForm.lastName.value = person.lastName;
	myForm.age.value = person.age;
	myForm.email.value = person.email;
	myForm.editRecordId.value = index;
	populateData();
}
function deleteRecord(index)
{
	persons.splice(index, 1);
	populateData();
}
function validate()
{
	//validate form data.
	return true;
}
