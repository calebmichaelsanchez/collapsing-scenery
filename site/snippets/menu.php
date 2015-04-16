<a href="#" class="nav-toggle">
  <div class="toggle"></div>
</a>
<nav>
  <ul class="nav-ul ghosted">
    <?php foreach($pages->visible() as $p): ?>
    <li>
      <a <?php e($p->isOpen(), ' class="active"') ?> href="#<?php echo strtolower($p->title()) ?>"><?php echo $p->title()->html() ?></a>
    </li>
    <?php endforeach ?>
  </ul>
</nav>
