<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ml-2"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">시장</div>

    <!-- Nav Item - Utilities Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="fas fa-fw fa-wrench"></i>
        <span>오늘의 이슈</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">자산관리</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="fas fa-fw fa-folder"></i>
        <span>내 주식</span>
      </a>
    </li>

    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>관심주식</span></a
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <div class="sidebar-heading">내 정보 관리</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-folder"></i>
        <span>내 정보 수정/탈퇴</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    <!-- Sidebar Message -->
    <div class="sidebar-card d-none d-lg-flex">
      <img
        class="sidebar-card-illustration mb-2"
        src="img/undraw_rocket.svg"
        alt="..."
      />
      <p class="text-center mb-2">
        <strong>SB Admin Pro</strong> is packed with premium features,
        components, and more!
      </p>
      <a
        class="btn btn-success btn-sm"
        href="https://startbootstrap.com/theme/sb-admin-pro"
        >Upgrade to Pro!</a
      >
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
export default {};
</script>

<style></style>
