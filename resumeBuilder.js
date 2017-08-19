var bio = {
	"name" : "Ali EssidMedAli",
	"role" : "Partner Monetization Support",
	"contacts" : {
		"email" : "essid.aly@gmail.com",
		"github" : "alissid",
    "linkedin" : "aliessid",
		"twitter" : "@essidmedali",
		"location" : "San Frnacisco Bay Area"
	},
	"welcomeMessage" : "Analytical, goal oriented and self-driven leader with a deep interest in technology, online advertising, finance, and social media "+
                      "Team player, dedicated, proactive, curious, and always eager to learn new approaches/methodologies "+
                      "Self-starter and passionate for getting things done with minimal direction. Always ready to roll up the sleeves and get into the details "+
                      "Google AdWords and DFP certified. Fluent in Arabic and French!",
	"skills" : ["SQL", "HTML5", "CSS3", "JavaScript"],
  "picture" : "images/me.png"
};

var work = {
	"jobs" : [
		{
			"employer" : "YouTube",
			"title" : "Partner Monetization Support",
			"location" : "San Bruno, CA",
			"datesWorked" : "April 2015 - Present",
			"description" : "Facilitating partners monetization set-up and partners onboarding through gCases "+
				"Troubleshooting, investigating and resolving partners monetization issues on YouTube channels and/or YouTube videos "+
				"Handling internal escalations from different Google teams (e.g. Partner Managers and Account Managers) to investigate channels "+
        "and/or videos monetization concerns, YouTube-Google_AdSense association issues, and Advertiser-friendly content eligibilities "+
				"Creating test accounts and testing new monetization suspension logics and/or new features before making them live to our partners  "+
				"Running SQL queries to pull up data and generate reports from internal database "+
        "Troubleshooting YouTube-AdSense association issues and providing solutions to partners "+
        "Reviewing premium channels/videos from policy perspective to meet our Advertiser-friendly guidelines."
		},
		{
			"employer" : "YouTube",
			"title" : "Policy Ops Associate",
			"location" : "San Bruno, CA",
			"datesWorked" : "February 2015 - April 2015",
			"description" : "Enforced YouTube policy guidelines while reviewing content that was flagged by our users and evaluated it for policy compliance, "+
				" I was rewarded for Special Achievement from YT Policy Ops team, and nominated one of the best employees of the month."
		},
		{
			"employer" : "T3 Trading",
			"title" : "Equities Trader",
			"location" : "New York, NY",
			"datesWorked" : "January 2014 - July 2014",
			"description" : "Established a daily Indexes and Stock research, selected Long and Short setups, analyzed different time frames, identified " +
        "and executed equity trades using technical & broad market analysis. " +
				"Implemented a multi-strategy focus in order to increase returns while balancing risk/reward ratio. " +
				"Used Bloomberg Terminal and Factset, maintained research & study of macro-economic trends as well as chart patterns to " +
        "better prepare and anticipate the market and create trading ideas using technical analysis. " +
				"Analyzed earning reports, reviewed analysts IPO reports, researched overall sector performance and company’s history."
		},
		{
			"employer" : "Legends Securities",
			"title" : "Intern",
			"location" : "New York, NY",
			"datesWorked" : "June 2012 - December 2012",
			"description" : "Established clients base and potential investors with assets to manage. " +
      "Used Bloomberg Terminal to follow the stock market, monitored real-time fluctuations within the trading day, and assisted "+
      "in different strategies of managing portfolios. "+
      "Worked on private equity projects. Analyzed financial statements, reviewed investments criteria, and contacted managing partners."
		},
	]
};

var education = {
	"schools" : [
		{ "school" : "Pace University, Lubin School of Business",
			"dates" : "January 2012 - December 2013",
			"location" : "New York, NY",
			"degree" : "MSsc in Investment Management",
			"major" : "Finance",
			"url" : "www.pace.edu"
		},
    { "school" : "Ecole Superieure de Commerce",
			"dates" : "September 2006 - June 2010",
			"location" : "Tunis, Tunisia",
			"degree" : "BS in Computer Science",
			"major" : "Information System",
			"url" : "www.esct.rnu.tn"
    }
	],
	"Certifications": [
		{ "school" : "Udacity",
			"course" : "Front-end Web Developer Nanodegree",
			"dates" : "Expected December 2017",
			"url" : "https://www.udacity.com"
		},
		{ "school" : "Google",
			"course" : "DoubleClick for Publishers",
			"dates" : "Ausgut 2017 - August 2018",
			"url" : "https://www.google.com/training/enroll"
		},
		{ "school" : "Google",
			"course" : "Google AdWords",
			"dates" : "February 2017 - February 2018",
			"url" : "https://support.google.com/partners/answer/3154326"
		},
		{ "school" : "Genral Assembly",
			"course" : "Data Analytics",
			"dates" : "November 2016",
			"url" : "https://generalassemb.ly/"
		}
	]
};

var projects = {
	"projects" : [
    {
			"title" : "Online Resume",
			"datesWorked" : "August 2017",
			"description" : "Created an online resume of work as part of Udacity's Front-End Web Developer. I used HTML, CSS, and JavaScript.",
		},
		{
			"title" : "Online Portfolio",
			"datesWorked" : "June 2017",
			"description" : "Created an online portfolio of work using HTML5 and CSS3",
			"images" : ["images/OnlinePortfolio.png"],
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
};

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
};


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

};

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.Certifications.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.Certifications.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.Certifications[i].course).replace("#", education.Certifications[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.Certifications[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.Certifications[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.Certifications[i].url).replace("#", education.Certifications[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
};

education.display();

$("#mapDiv").append(googleMap);
