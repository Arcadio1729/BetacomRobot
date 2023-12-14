## Description

Robot consists of:

 1. PROCESSES:
	 - BetacomDispatcher
		- creates queue based on input file
	- BetacomRef
		 - processes items in queue
		 - creates final report
2. QUEUE:
	- one queue for input KRS items
3. ASSETS:
	 - WorkingDirectory
	 - InputWorksheetName
	 - InputWorkbookName
	 - InputTempWorkbookName
	 - InputDirectory
4. STACK TECHNOLOGY:
	 - UI Path - Ref framework
     - js scripts for handling webpage
5. USED APPLICATION:
	- MS Excel
	- Google Chrome

## TO DO
1. Potential architecture could consists of three processes:
	- dispatcher
	- krs handler (splits items in queue)
	- report creator (get items and closed them)
2. Clean code:
	- it's my second robot in uipath and there are some paths that could be better written:
		- split variables scope
		- better handling the applications (opening and closing)
			- excel,
			- chrome
     - prepare testcases
     - report is generated in pdf instead of html
