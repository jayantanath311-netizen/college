// Toggle between Screenshot 1 and Screenshots 2 & 3
function showEconomicsView() {
  document.getElementById('humanitiesOverviewSection').style.display = 'none';
  document.getElementById('economicsDepartmentSection').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHumanitiesView() {
  document.getElementById('economicsDepartmentSection').style.display = 'none';
  document.getElementById('humanitiesOverviewSection').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal Click Handler
function openFacultyProfile(facultyId) {
  // Opens modal with faculty details
  const modal = document.getElementById('facultyProfileModal');
  if (modal) modal.classList.add('active');
}