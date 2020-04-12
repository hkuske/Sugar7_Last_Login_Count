/*
 * Shows:
 * 	# logins during last da, week, month, year
 * 
 * 
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
({
	plugins : ['Dashlet'],
	initDashlet : function () {
		debugger;
	},
	loadData : function (options) {
		debugger;
		this.count_day = 0;
		this.count_week = 0;
		this.count_month = 0;
		this.count_year = 0;

		App.api.call(
			'read', 
			App.api.buildURL('Users/count/?filter=[{"last_login":{"$gt":"\'date_sub(now(),interval 1 day)\'"}}]'), 
			null, 
			{ 
				success: _.bind(
					function(o) {
						debugger;
						this.count_day = o.record_count;
						console.log("Logins: "+this.count_day);
						this.render();
					},
					this),
			}
		);

		App.api.call(
			'read', 
			App.api.buildURL('Users/count/?filter=[{"last_login":{"$gt":"\'date_sub(now(),interval 7 day)\'"}}]'), 
			null, 
			{ 
				success: _.bind(
					function(o) {
						debugger;
						this.count_week = o.record_count;
						console.log("Logins: "+this.count_week);
						this.render();
					},
					this),
			}
		);

		App.api.call(
			'read', 
			App.api.buildURL('Users/count/?filter=[{"last_login":{"$gt":"\'date_sub(now(),interval 30 day)\'"}}]'), 
			null, 
			{ 
				success: _.bind(
					function(o) {
						debugger;
						this.count_month = o.record_count;
						console.log("Logins: "+this.count_month);
						this.render();
					},
					this),
			}
		);

		App.api.call(
			'read', 
			App.api.buildURL('Users/count/?filter=[{"last_login":{"$gt":"\'date_sub(now(),interval 365 day)\'"}}]'), 
			null, 
			{ 
				success: _.bind(
					function(o) {
						debugger;
						this.count_year = o.record_count;
						console.log("Logins: "+this.count_year);
						this.render();
					},
					this),
			}
		);

	}
})
