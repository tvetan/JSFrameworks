﻿/// <reference path="jquery-2.0.3.js" />
/// <reference path="class.js" />
var controlers = controlers || {};
(function (c) {
	var ListView = Class.create({
		init: function (itemsSource) {
			if (!(itemsSource instanceof Array)) {
				throw "The itemsSource of a ListView must be an array!";
			}
			this.itemsSource = itemsSource;
		},
		render: function (template) {
			var list = document.createElement("ul");
			for (var i = 0; i < this.itemsSource.length; i++) {
				var listItem = document.createElement("li");
				var item = this.itemsSource[i];
				listItem.innerHTML = template(item);
				list.appendChild(listItem);
			}
			return list.outerHTML;
		}
	});

	var TableView = Class.create({
	    init: function (itemsSource, colsCount) {
	        if (!(itemsSource instanceof Array)) {
	            throw "The itemsSource of a TableView must be an array!";
	        }
	        this.itemsSource = itemsSource;
	        this.colsCount = colsCount;
	    },
	    render: function (template, colCount) {
	        var table = document.createElement("table");
	        table.id = "table-view";
	        var thead = document.createElement("thead");
	        table.appendChild(thead);
	        var headRow = document.createElement("tr");
	        var theadContent = "<tr>" +
                                 "<th>Student</th>" +
	                             "<th>Grade</th>" +
	                             "<th>Age</th>";

	        for (var i = 0; i < (colCount - 3) / 2; i++) {

	            theadContent += "<th>Subject</th>" +
                                     "<th>Scores</th>";
	        }

	        theadContent += "</tr>";
	        thead.innerHTML = theadContent;
            
	        var tbody = document.createElement("tbody");
	        table.appendChild(tbody);
	        for (var i = 0; i < this.itemsSource.length; i++) {
	            var listItem = document.createElement("tr");
	            var item = this.itemsSource[i];
	            listItem.innerHTML = template(item);
	            tbody.appendChild(listItem);

	        }
	        return table.outerHTML;
	    }
	});
	
	var TableMarkView = Class.create({
	    init: function (itemsSource) {
	        /*if (!(itemsSource instanceof Array)) {
	            throw "The itemsSource of a TableView must be an array!";
	        }*/
	        this.itemsSource = itemsSource;
	    },
	    render: function (template) {
	        var table = document.createElement("table");
	        table.id = "table-view";
	        var thead = document.createElement("thead");
	        table.appendChild(thead);
	        var headRow = document.createElement("tr");
	        var theadContent = "<tr>" +
									"<th>Subject</th>" +
                                    "<th>Scores</th>" +
								"</tr>";
	        thead.innerHTML = theadContent;
            
	        var tbody = document.createElement("tbody");
			tbody.innerHTML = template(this.itemsSource);
	        table.appendChild(tbody);
	        return table.outerHTML;
	    }
	});

	c.getListView = function (itemsSource) {
		return new ListView(itemsSource);
	}

	c.getTableView = function (itemsSource, colsCount) {
	    return new TableView(itemsSource, colsCount);
	}
	
	c.getTableMarkView = function (itemsSource, colsCount) {
	    return new TableMarkView(itemsSource, colsCount);
	}
}(controlers || {}));