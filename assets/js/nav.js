(function () {
	const currentPage = window.location.pathname.split('/').pop() || 'index.html';

	const links = [
		{ href: 'index.html', label: 'Home 主页' },
		{ href: 'fees.html', label: 'Fees 服务及收费' },
		{ href: 'resources.html', label: 'Resources 资源' },
		// { href: 'https://form.jotform.com/243126299351862', label: 'Pay online 在线支付' },
		// { href: 'career.html', label: 'Career 招聘' }
	];

	const itemsHTML = links
		.map(function (link) {
			const isActive = link.href === currentPage ? ' class="active"' : '';
			return `<li${isActive}><a href="${link.href}">${link.label}</a></li>`;
		})
		.join('\n\t\t\t');

	const navHTML = `
		<nav id="nav">
			<ul class="links">
				${itemsHTML}
			</ul>
		</nav>
	`;

	const mount = document.getElementById('site-nav');
	if (mount) {
		mount.outerHTML = navHTML;
	}
})();