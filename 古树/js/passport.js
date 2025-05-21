 // 生长控制器
	    let currentStep = 0;
	    const stages = document.querySelectorAll('.tree-stages > div');
	    const buttons = document.querySelectorAll('.growth-step');
	    const message = document.querySelector('.completion-message');
	
	    // 按钮点击事件
	    buttons.forEach(button => {
	        button.addEventListener('click', function() {
	            const step = parseInt(this.dataset.step);
	            
	            if (step === currentStep + 1) {
	                this.disabled = true;
	                this.classList.add('active');
	                animateGrowth(step);
	                currentStep++;
	                
	                if (currentStep === 4) {
	                    showCompletionMessage();
	                }
	            }
	        });
	    });
	
	    // 生长动画函数
	    function animateGrowth(step) {
	        const garden = document.querySelector('.garden-area');
	        
	        // 清理旧效果
	        garden.querySelectorAll('.seed-fall, .water-drop, .sun-rays, .fertilizer-particle').forEach(el => el.remove());
	
	        // 添加新效果
	        switch(step) {
	            case 1:
	                createSeedEffect(garden);
	                break;
	            case 2:
	                createWaterEffect(garden);
	                break;
	            case 3:
	                createSunEffect(garden);
	                break;
	            case 4:
	                createFertilizerEffect(garden);
	                break;
	        }
	
	        // 更新树木显示
	        stages.forEach(stage => stage.style.opacity = '0');
	        const currentStage = stages[step-1];
	        currentStage.style.opacity = '1';
	
	       if(step === 4) {
	           currentStage.innerHTML = `
	               <svg class="tree-svg" viewBox="0 0 100 200">
	                   <!-- 树干 -->
	                   <rect x="45" y="150" width="10" height="50" fill="#795548" />
	                   
	                   <!-- 底层三角形树冠 (尖顶朝上) -->
	                   <polygon points="50,75 0,150 100,150" fill="#4CAF50" />
	                   
	                   <!-- 上层三角形树冠 (尖顶朝上) -->
	                   <polygon points="50,30 10,75 90,75" fill="#4CAF50" />
	               </svg>
	           `;
	           currentStage.style.animation = 'treeGrow 2s ease';
	       }
	}
	    // 效果创建函数
	    function createSeedEffect(container) {
	        for(let i=0; i<10; i++) {
	            const seed = document.createElement('div');
	            seed.className = 'seed-fall';
	            seed.style.left = `${50 + (Math.random() - 0.5) * 80}%`;
	            container.appendChild(seed);
	        }
	    }
	
	    function createWaterEffect(container) {
	        for(let i=0; i<15; i++) {
	            const drop = document.createElement('div');
	            drop.className = 'water-drop';
	            drop.style.left = `${40 + Math.random() * 20}%`;
	            drop.style.animationDelay = `${i*0.1}s`;
	            container.appendChild(drop);
	        }
	    }
	
	    function createSunEffect(container) {
	        const rays = document.createElement('div');
	        rays.className = 'sun-rays';
	        container.appendChild(rays);
	    }
	
	    function createFertilizerEffect(container) {
	        for(let i=0; i<20; i++) {
	            const particle = document.createElement('div');
	            particle.className = 'fertilizer-particle';
	            particle.style.left = `${40 + Math.random() * 20}%`;
	            particle.style.bottom = `${20 + Math.random() * 10}%`;
	            container.appendChild(particle);
	        }
	    }
	
	    // 显示完成信息
	    function showCompletionMessage() {
	        message.textContent = "🌳 感谢你的悉心照料！我们共同成长！";
	        message.style.opacity = '1';
	        
	        setTimeout(() => {
	            message.style.transform = 'translateY(-10px)';
	            setTimeout(() => message.style.transform = 'translateY(0)', 500);
	        }, 1000);
	    }