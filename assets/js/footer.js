(function () {
	const year = new Date().getFullYear();
	const footerHTML = `
		<footer id="footer">
			<section>
				<div class="footer-links-group">
					<h3>Patient Resources / 患者资源</h3>
					<ul class="footer-links-list">
						<li><a href="https://www.healthpoint.co.nz/gps-accident-urgent-medical-care/accident-urgent-medical-care-ae/central-auckland/">After hours clinics 下班后诊所</a></li>
						<li><a href="https://www.awanuilabs.co.nz/north/auckland/collection-centres/">Labtest centres 化验所地址</a></li>
						<li><a href="https://www.timetoscreen.nz/breast-screening/sign-up/">BreastScreen 乳房筛查</a></li>
						<li><a href="https://nationalwomenshealth.adhb.govt.nz/our-services/contraception-clinic/">Free contraception clinics 免费避孕诊所</a></li>
						<li><a href="https://www.dominionmedical.co.nz/files/iron-infusion-patient-information-sheet.pdf">Iron infusion 静脉铁剂输注</a></li>
						<li><a href="https://www.dominionmedical.co.nz/files/aclasta-info.pdf">Zoledronic acid infusion 唑来膦酸 (Aclasta) 输液</a></li>
					</ul>
				</div>
				<div class="footer-links-group">
					<h3>Clinic Info / 诊所信息</h3>
					<ul class="footer-links-list">
						<li><a href="about.html">About us 关于我们</a></li>
						<li><a href="career.html">Join us 加入我们的团队</a></li>
						<li><a href="files/health-information-privacy-statement.pdf">Privacy statement 隐私声明</a></li>
                        <li><a href="files/lab-results-policy.pdf">Lab results policy 检查报告政策</a></li>
                        <li><a href="https://www.jotform.com/223441001711033">Complaints 投诉</a></li>
					</ul>
				</div>
			</section>
			<section class="split contact">
				<section class="alt">
					<h3>Address</h3>
					<p>
						<a href="https://maps.google.com/?q=349+Mt+Albert+Road,+Mt+Roskill,+Auckland+1041" target="_blank" rel="noopener">
							349 Mt Albert Road<br />
							Mt Roskill, Auckland 1041
						</a>
					</p>
				</section>
				<section>
					<h3>Phone</h3>
					<p><a href="tel:+6496204986">09-6204986</a></p>
				</section>
				<section>
					<h3>Fax</h3>
					<p>09-6201349</p>
				</section>
				<section>
					<h3>Email</h3>
					<p><a href="mailto:contact@dominionmedical.co.nz">contact@dominionmedical.co.nz</a></p>
				</section>
			</section>
		</footer>

		<div id="copyright">
			<ul>
				<li>&copy; Dominion Medical Centre</li>
				<li>${year}</li>
			</ul>
		</div>
	`;

	const mount = document.getElementById('site-footer');
	if (mount) {
		mount.outerHTML = footerHTML;
	}
})();