'use strict';

var assert=require('assert');

module.exports = function() {
	this.World = require('../support/world.js').World;

	this.Given(/^Open browser and Start Application$/, function () {
		this.driver.get("https://finansa-uat.awareidc.com/language/en/");
	});

	this.When(/^Application Show menu Home$/, function () {
		this.driver.findElement({ css: 'a[href="/"]' }).then(function(ele){
			ele.getText().then(function (text) {
				assert.equal(text,"HOME");
				console.log(text);
		 });
		});
		this.driver.sleep(3500);
	});

	this.When(/^Application Show menu THE COMPANY$/, function () {
		this.driver.findElement({ css: 'a[href="/en/the-company"]' }).then(function(ele){
			ele.getText().then(function (text) {
				assert.equal(text,"THE COMPANY");
				console.log(text);
		 });
		});
		this.driver.sleep(3500);
	});

	this.When(/^Application Show menu INVESTMENT BANKING$/, function () {
		this.driver.findElement({ css: 'a[href="/en/investment-banking"]' }).then(function(ele){
			ele.getText().then(function (text) {
				assert.equal(text,"INVESTMENT BANKING");
				console.log(text);
		 });
		});
		this.driver.sleep(3500);
	});

	this.When(/^Application Show menu WEALTH MANAGEMENT$/, function () {
		this.driver.findElement({ css: 'a[href="/en/wealth-management"]' }).then(function(ele){
			ele.getText().then(function (text) {
				assert.equal(text,"WEALTH MANAGEMENT");
				console.log(text);
		 });
		});
		this.driver.sleep(3500);
	});

	this.When(/^Application Show menu PRIVATE EQUITY$/, function () {
		this.driver.findElement({ css: 'a[href="/en/private-equity"]' }).then(function(ele){
			ele.getText().then(function (text) {
				assert.equal(text,"PRIVATE EQUITY");
				console.log(text);
		 });
		});
		this.driver.sleep(3500);
	});

	this.When(/^Application Show menu REAL ESTATE$/, function () {
		this.driver.findElement({ css: 'a[href="/en/real-estate"]' }).then(function(ele){
			ele.getText().then(function (text) {
				assert.equal(text,"REAL ESTATE");
				console.log(text);
		 });
		});
		this.driver.sleep(3500);
	});

	this.When(/^Application Show menu INVESTOR RELATIONS$/, function () {
		this.driver.findElement({ css: 'a[href="/en/investor-relations"]' }).then(function(ele){
			ele.getText().then(function (text) {
				assert.equal(text,"INVESTOR RELATIONS");
				console.log(text);
		 });
		});
		this.driver.sleep(3500);
	});

	this.When(/^Application Show menu NEWS$/, function () {
		this.driver.findElement({ css: 'a[href="/en/news-and-announcements"]' }).then(function(ele){
			ele.getText().then(function (text) {
				assert.equal(text,"NEWS");
				console.log(text);
		 });
		});
		this.driver.sleep(3500);
	});

	this.When(/^Application Show menu CONTACT$/, function () {
		this.driver.findElement({ css: 'a[href="/en/contact"]' }).then(function(ele){
			ele.getText().then(function (text) {
				assert.equal(text,"CONTACT");
				console.log(text);
		 });
		});
		this.driver.sleep(3500);
	});

	this.Then(/^Application Show  Navigation Menu$/, function () {
		
		this.driver.sleep(3500);
	});

	

};