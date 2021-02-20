const resolveRoutes = (route) => {
	if (route.length == 5) {
		return `/${route}`;
	}
	if (route.length <= 6) {
		let validRoute = route === '/' ? route : '/:id';
		return validRoute;
	}
};

export default resolveRoutes;
