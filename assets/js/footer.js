(function () {
	const year = new Date().getFullYear();

	const footerHTML = `
		<footer id="footer">
			<section>
				<div class="footer-links-group">
					<h3>Quick Links 常用链接</h3>
					<ul class="footer-links-list">
						<li><a href="https://www.adhb.health.nz/your-health/find-an-accident-and-medical-clinic/" target="_blank" rel="noopener">After Hours Clinics 下班后诊所</a></li>
						<li><a href="https://gpappointments.healthnz.govt.nz/book" target="_blank" rel="noopener">After Hours Online GP 下班后网上会诊</a></li>
						// <li><a href="https://www.awanuilabs.co.nz/north/auckland/collection-centres/" target="_blank" rel="noopener">Awanui Labs (Labtests) 化验所地址</a></li>
						<li><a href="https://www.wellwomenandfamily.co.nz/clinics" target="_blank" rel="noopener">Free Smear Clinics 免费宫颈抹片检查</a></li>
						<li><a href="https://www.timetoscreen.nz/breast-screening/sign-up/" target="_blank" rel="noopener">BreastScreen 乳房筛查</a></li>
						<li><a href="https://nationalwomenshealth.adhb.govt.nz/our-services/contraception-clinic/" target="_blank" rel="noopener">Free Contraception Clinics 免费避孕诊所</a></li>
						<li><a href="https://www.healthnz.govt.nz/health-topics/keeping-healthy/cancer-screening/bowel-screening" target="_blank" rel="noopener">Bowel screening 肠道筛查试</a></li>
						<li><a href="files/iron-infusion-patient-information-sheet.pdf" target="_blank" rel="noopener">Iron infusion info  静脉铁剂输注</a></li>
						<li><a href="files/aclasta-info.pdf" target="_blank" rel="noopener">zoledronic acid (Aclasta) infusion 唑来膦酸 (Aclasta) 输液</a></li>
					</ul>
				</div>
			</section>

			<section>
				<div class="footer-links-group">
					<h3>Contact 联系方式</h3>
					<ul class="footer-contact-list">
						<li><strong>Address:</strong> 349 Mt Albert Rd, Mt Roskill, Auckland 1041</li>
						<li><strong>Phone:</strong> <a href="tel:+6496204986">09-6204986</a></li>
						<li><strong>Email:</strong> <a href="mailto:contact@dominionmedical.co.nz">contact@dominionmedical.co.nz</a></li>
						<li><strong>HealthLink EDI:</strong>dommcmtr</li>
					</ul>
				</div>

				<div class="footer-links-group">
					<h3>Clinic Info 诊所信息</h3>
					<ul class="footer-links-list">
						<li><a href="about.html">About Us 关于我们</a></li>
						<li><a href="career.html">Join Our Team 加入我们</a></li>
						<li><a href="files/lab-results-policy.pdf">Lab Results Policy 检查报告政策</a></li>
						<li><a href="files/health-information-privacy-statement.pdf">Privacy Statement 隐私声明</a></li>
					</ul>
				</div>
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